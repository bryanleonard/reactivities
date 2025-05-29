import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useActivities } from "../../lib/hooks/useActivities";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";


function App() {
	// const [activities, setActivities] = useState<Activity[]>([]);
	const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
	const [editMode, setEditMode] = useState(false);
	const {activities, isPending} = useActivities();

	const handleSelectActivity = (id: string) => {
		setSelectedActivity(activities!.find((x) => x.id === id));
	};

	const handleCancelSelectActivity = () => {
		setSelectedActivity(undefined);
	};

	const handleOpenForm = (id?: string) => {
		if (id) handleSelectActivity(id);
		else handleCancelSelectActivity();
		setEditMode(true);
	};

	const handleFormClose = () => {
		setEditMode(false);
	};



	return (
		<Box sx={{}}>
			<NavBar openForm={handleOpenForm} />

			<Container maxWidth="xl" sx={{ mt: 3, pb: 6 }}>
				{!activities || isPending ? (
					<Typography>Loading...</Typography>
				) : (
					<ActivityDashboard
						activities={activities}
						selectActivity={handleSelectActivity}
						cancelSelectActivity={handleCancelSelectActivity}
						selectedActivity={selectedActivity}
						editMode={editMode}
						openForm={handleOpenForm}
						closeForm={handleFormClose}
					/>
				)}
			</Container>
		</Box>
	);
}

export default App;
