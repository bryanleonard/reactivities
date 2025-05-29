import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { useActivities } from "../../../../lib/hooks/useActivities";
import { formatDate } from '../../../../lib/utils/dateHelpers';

type Props = {
	selectedActivity: Activity;
	cancelSelectActivity: () => void;
	openForm: (id: string) => void
}


export default function ActivityDetail({selectedActivity, cancelSelectActivity, openForm}: Props) {
	
	const {activities} = useActivities();
	const activity = activities?.find(x => x.id = selectedActivity.id);
	
	if (!activity) return <Typography>Loading...</Typography>

	return (
		<Card>
			<CardMedia
				component='img'
				src={`images/categoryImages/${activity.category}.jpg`}
			/>
			<CardContent sx={{p:2}}>
				<Typography variant='h6' color='primary'>{activity.title}</Typography>
				<Typography variant='subtitle1' fontWeight='light'>{formatDate(activity.date)}</Typography>
				<Typography variant='body1'>{activity.description}</Typography>
			</CardContent>
			<CardActions sx={{display: 'flex', justifyContent: 'right', p: 2}}>
				<Button size='small' color='inherit' onClick={cancelSelectActivity}>Cancel</Button>
				<Button size='small' variant='contained' onClick={() => openForm(activity.id)}>Edit</Button>
			</CardActions>
		</Card>
	)
}

function useActivies(): { activities: any; } {
	throw new Error("Function not implemented.");
}
