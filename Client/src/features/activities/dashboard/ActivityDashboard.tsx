import { Grid, List } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "./details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
	activities: Activity[];
	selectActivity: (id: string) => void;
	cancelSelectActivity: () => void;
	selectedActivity?: Activity;
	closeForm: () => void;
	openForm: (id: string) => void;
	editMode: boolean;
};

export default function ActivityDashboard({
	activities,
	selectActivity,
	cancelSelectActivity,
	selectedActivity,
	openForm,
	closeForm,
	editMode
}: Props) {
	

	return (
		<Grid container spacing={3}>
			<Grid size={7}>
				<List sx={{ pt: 0 }}>
					<ActivityList
						activities={activities}
						selectActivity={selectActivity}
					/>
				</List>
			</Grid>
			<Grid size={5}>
				{selectedActivity && !editMode && 
					<ActivityDetail
						selectedActivity={selectedActivity}
						cancelSelectActivity={cancelSelectActivity}
						openForm={openForm}
					/>
				}
				{editMode && 
					<ActivityForm closeForm={closeForm} activity={selectedActivity} />
				}
			</Grid>
		</Grid>
	);
}
