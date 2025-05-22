import { List, ListItem, Typography } from '@mui/material';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import './App.css'

function App() {
  const [activities, setActivities] = useState<Activity[]>([])

  // useEffect(() => {
  //   fetch('https://localhost:5001/api/activities')
  //   .then(res => res.json())
  //   .then(data => setActivities(data))
  //   return () => {}
  // }, [])

  useEffect(() => {
     axios.get<Activity[]>('https://localhost:5001/api/activities')
     .then(res => setActivities(res.data))

     return () => {}
  }, [])
 

  return (
    <>
      <Typography variant='h4'>Reactivities</Typography>
      <List>
        {
          activities.map((item) => (
            <ListItem key={item.id}>{item.title}</ListItem>
          ))
        }
      </List>
    </>
  )
}

export default App
