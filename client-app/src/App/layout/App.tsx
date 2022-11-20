import { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../models/Activity';
import Navbar from './Navbar';
import  {v4 as uid} from 'uuid';
import ActivityDashboard from 'src/features/activities/dashboard/ActivityDashboard';
import { Container } from 'semantic-ui-react';
import * as React from 'react';
function App() {
  const [activities, setActivites] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(q => q.id === id));
  }
  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleOpenForm(id?: string) {
    setEditMode(true);
    id ? setSelectedActivity(activities.find(q => q.id === id)) : setSelectedActivity(undefined);
  }
  function handleCloseForm() {
    setEditMode(false);
  }
  function handleCreateOrEdit(activity: Activity) {
    activity.id ? setActivites([...activities.filter(q => q.id !== activity.id), activity])
      : setActivites([...activities, {...activity, id: uid()}]);
    setEditMode(false);
    setSelectedActivity(activity);
  }
  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/Activities').then(response => {
      setActivites(response.data);
      console.log(response.data);
    })
  }, [])
  return (
    <div>
      <Navbar openForm={handleOpenForm} />
      <Container style={{ marginTop: '7em' }}>
        <ActivityDashboard
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleCloseForm}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          activities={activities}
          createOrEdit={handleCreateOrEdit}
        />
      </Container>
    </div>
  )
}

export default App;