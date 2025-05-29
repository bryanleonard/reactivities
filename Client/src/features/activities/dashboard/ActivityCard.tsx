import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"
import { formatDate } from "../../../lib/utils/dateHelpers";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
	activity: Activity;
	selectActivity: (id: string) => void;
}

export default function ActivityCard({activity, selectActivity}: Props) {

	const {deleteActivity} = useActivities();
	
	return (
		<Card sx={{borderRadius: 2}}>
			<CardContent>
				<Typography variant='h6' color='primary'>{activity.title}</Typography>
				<Typography sx={{color: 'text.secondary', mb: 1}}>{formatDate(activity.date)}</Typography>
				<Typography variant="body2">{activity.description}</Typography>
				<Typography variant="subtitle1">{activity.city} / {activity.venue}</Typography>
			</CardContent>
			<CardActions sx={{display: 'flex', justifyContent: 'space-between', pb: 2, px: 2}}>
				<Chip label={activity.category} variant='outlined' />
				<Box display='flex' gap={2}>
					<Button size='small'  color='error' onClick={() => deleteActivity.mutate(activity.id)} disabled={deleteActivity.isPending}>Delete</Button>
					<Button size='small' variant='contained' onClick={() => selectActivity(activity.id)}>View</Button>
				</Box>
			</CardActions>
		</Card>
	)
}