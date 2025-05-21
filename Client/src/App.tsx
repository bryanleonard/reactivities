import { List, ListItem, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
// import './App.css'

function App() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    fetch('https://localhost:5001/api/activities')
    .then(res => res.json())
    .then(data => setActivities(data))
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
