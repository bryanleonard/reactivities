import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
	activity?: Activity;
	closeForm: () => void;
}

export default function ActivityForm({activity, closeForm}: Props) {

	const {updateActivity, createActivity} = useActivities()

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		const data: {[key: string]: FormDataEntryValue} = {};

		formData.forEach((value, key) => {
			data[key] = value;
		});

		if (activity) {
			data.id = activity.id;
			await updateActivity.mutateAsync(data as unknown as Activity);
			closeForm();
		}
		else {
			await createActivity.mutateAsync(data as unknown as Activity);
			closeForm();
		}
	}
	
	return (
		<Paper sx={{borderRadius: 2, p: 2}}>
			<Typography variant="h5" gutterBottom color="primary">Create activity</Typography>

			<Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={3}>

				<TextField name="title" size='small' label='Title' defaultValue={activity?.title} />
				<TextField name='description' size='small' label='Description' defaultValue={activity?.description} multiline rows={3} />
				<TextField name='category' size='small' label='Category' defaultValue={activity?.category} />
				<TextField name='date' size='small' label='' type='date' 
					defaultValue={activity?.date 
						? new Date(activity.date).toISOString().split('T')[0] 
						: new Date().toISOString().split('T')[0] 
					} 
				/>
				<TextField name='city' size='small'label='City' defaultValue={activity?.city} />
				<TextField name='venue' size='small'label='Venue' multiline rows={2} />

				<Box display='flex' justifyContent='end' gap={3}>
					<Button size='small' color='inherit' onClick={closeForm}>Cancel</Button>
					<Button 
						disabled={updateActivity.isPending || createActivity.isPending}
						size='small' variant='contained' type='submit'>Submit</Button>
				</Box>

			</Box>
		</Paper>
	)
}