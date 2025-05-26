import { Box, Container, CssBaseline } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';


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
    <Box sx={{bgcolor: '#eeeeee'}}>
      <CssBaseline />
      <NavBar />

      <Container maxWidth='xl' sx={{mt: 3, mb: 4}}>

        <ActivityDashboard activities={activities} />

      </Container>

      
    </Box>
  )
}

export default App
