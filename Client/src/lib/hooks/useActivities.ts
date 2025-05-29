import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";

export const useActivities = () => {

	// useEffect(() => {
	//   fetch('https://localhost:5001/api/activities')
	//   .then(res => res.json())
	//   .then(data => setActivities(data))
	//   return () => {}
	// }, [])

	// useEffect(() => {
	// 	axios
	// 		.get<Activity[]>("https://localhost:5001/api/activities")
	// 		.then((res) => setActivities(res.data));

	// 	return () => {};
	// }, []);

	const queryClient = useQueryClient();

	const {data: activities, isPending} = useQuery({
    queryKey: ['activities'],
    queryFn: async () => {
      const resp = await agent.get<Activity[]>("/activities");
      return resp.data;
    }
	});

	const updateActivity = useMutation({
		mutationFn: async (activity: Activity) => {
			await agent.put('/activities', activity)
		},
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['activities']
			})
		}
	});

	const createActivity = useMutation({
		mutationFn: async(activity: Activity) => {
			await agent.post('activities', activity)
		},
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['activities']
			})
		}
	});

	const deleteActivity = useMutation({
		mutationFn: async(id: string) => {
			await agent.delete(`activities/${id}`)
		},
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['activities']
			})
		}
	});

	return {
		activities,
		isPending,
		updateActivity,
		createActivity,
		deleteActivity
	}
}