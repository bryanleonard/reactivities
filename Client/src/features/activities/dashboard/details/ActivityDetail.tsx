import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
	activity: Activity;
	cancelSelectActivity: () => void;
	openForm: (id: string) => void
}


export default function ActivityDetail({activity, cancelSelectActivity, openForm}: Props) {
	console.log('activity.id', activity.id);
	return (
		<Card sx={{p:2}}>
			<CardMedia
				component='img'
				src={`images/categoryImages/${activity.category}.jpg`}
			/>
			<CardContent>
				<Typography variant='h6' color='primary'>{activity.title}</Typography>
				<Typography variant='subtitle1' fontWeight='light'>{activity.date}</Typography>
				<Typography variant='body1'>{activity.description}</Typography>
			</CardContent>
			<CardActions sx={{display: 'flex', justifyContent: 'right', p: 0}}>
				<Button size='small' color='inherit' onClick={cancelSelectActivity}>Cancel</Button>
				<Button size='small' variant='contained' onClick={() => openForm(activity.id)}>Edit</Button>
			</CardActions>
		</Card>
	)
}