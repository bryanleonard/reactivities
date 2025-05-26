import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
	activities: Activity[]
}

export default function ActivityList({activities} : Props) {
	return (
		<Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
			{activities.map((item) => (
				<ActivityCard key={item.id} activity={item} />
			))}
		</Box>
	)
}