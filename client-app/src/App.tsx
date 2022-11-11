import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as React from 'react';
import { List, ListItem } from 'semantic-ui-react';
function App(){
  const [activities, setActivites] = useState([]);
  useEffect(()=>{
    axios.get('https://localhost:7253/api/Activities').then(response => {
      setActivites(response.data);
      console.log(response.data);
    })
  }, [])
  return (
    <List>
      {activities.map((item: any)=> (
        <ListItem key={item.id}>
          {item.title}
        </ListItem>
       
      ))}
    </List>
  )
}

export default App;