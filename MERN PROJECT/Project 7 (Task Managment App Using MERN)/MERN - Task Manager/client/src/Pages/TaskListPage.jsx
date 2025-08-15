import { useEffect, useState } from "react";
import Task from "../components/Task";
import { toast } from "react-toastify";

const TaskListPage = () => {
    const [tasks, setTasks] = useState()
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        setRefresh(false);
        const getTasks = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/task/get-all-task`)
            const responseData = await response.json();
            setTasks(responseData);
        }
        getTasks()
    }, [refresh])

    const deleteTask = async (taskid) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/task/delete-task/${taskid}`, {
                method: 'DELETE'
            })
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.message)
            }
            setRefresh(true)
            toast(responseData.message)
        } catch (error) {
            toast(error.message)
        }
    }

    return (
        <div className="pt-5">
            <h1 className="text-2xl font-bold mb-5">My Tasks</h1>
            {tasks && tasks.status ?
                tasks.taskData.length > 0 ? tasks.taskData.map((task) => <Task props={task} key={task._id} onDelete={deleteTask} />)
                    :
                    <>
                        <div>0 Task</div>
                    </>
                :
                <>Loading...</>
            }
        </div>
    );
};

export default TaskListPage;