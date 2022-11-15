import {useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../models/Activity';
import Navbar from './Navbar';
import ActivityDashboard from 'src/features/activities/dashboard/ActivityDashboard';
import { Container } from 'semantic-ui-react';
import * as React from 'react';
function App(){
  const [activities, setActivites] = useState<Activity[]>([]);
  useEffect(()=>{
    axios.get<Activity[]>('https://localhost:7253/api/Activities').then(response => {
      setActivites(response.data);
      console.log(response.data);
    })
  }, [])
  return (
    <div>
      <Navbar />
      <Container style={{marginTop : '7em'}}>
        <ActivityDashboard activities={activities}/>
      </Container>
      </div>
  )
}

export default App;