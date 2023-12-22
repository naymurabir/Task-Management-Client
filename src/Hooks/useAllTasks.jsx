import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useAllTasks = () => {
    const axiosPublic = useAxiosPublic()

    const { user } = useAuth()

    const { data: totalTasks, isPending, refetch } = useQuery({
        queryKey: ['totalTasks', user?.email],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/allTasks?email=${user?.email}`)
            return data
        }
    })


    return { totalTasks, isPending, refetch }
};

export default useAllTasks;