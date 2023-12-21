import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useAllTasks = () => {
    const axiosPublic = useAxiosPublic()

    const { user } = useAuth()

    const { data: allTasks, isPending, refetch } = useQuery({
        queryKey: ['allTasks', user?.email],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/allTasks?email=${user?.email}`)
            return data
        }
    })


    return { allTasks, isPending, refetch }
};

export default useAllTasks;