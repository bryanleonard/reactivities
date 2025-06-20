import {
	Box,
	AppBar,
	Toolbar,
	Typography,
	Button,
	Container,
	MenuItem
} from "@mui/material";
import { Group } from "@mui/icons-material";

type Props = {
	openForm: () => void;
}

export default function NavBar({openForm}: Props) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				sx={{backgroundImage: "linear-gradient(135deg, #1a365d 0%, #3d6fa3 69%, #4a90b8 89%)"}}>

				<Container maxWidth='xl'>
					<Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>

						<Box>
							<MenuItem sx={{display: 'flex', gap: 2, marginLeft: 0, paddingLeft: 0}}>
								<Group fontSize='large' />
								<Typography variant='h5' fontWeight='bold'>Reactivities</Typography>
							</MenuItem>

						</Box>

						<Box sx={{display: 'flex'}}>
							<MenuItem sx={{fontSize: '1.1rem', textTransform: 'uppercase', fontWeight: 'bold'}}>
								Activities
							</MenuItem>
							<MenuItem sx={{fontSize: '1.1rem', textTransform: 'uppercase', fontWeight: 'bold'}}>
								About
							</MenuItem>
							<MenuItem sx={{fontSize: '1.1rem', textTransform: 'uppercase', fontWeight: 'bold'}}>
								Contact
							</MenuItem>

						</Box>

						<Button size="small" variant="contained" color="warning" onClick={() => openForm()}>Create Activity</Button>

					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}
