import axios from 'axios';
import { Task, DropDownOptions } from '../model/task';

class ApiService {
    //private baseServiceEndpoint = 'https://localhost:44314/api/';
    private baseServiceEndpoint = 'https://localhost:5001/api/';

    /**
     * Gets all tasks
     *
     * @returns {Promise<Tasks[]>} Returns promise that contains all tasks info.
     */
    public getAllTasks = async (): Promise<Task[]> => {
        const url = this.baseServiceEndpoint + 'tasks';
        return axios.get(url).then((res: any) => {
            const tasks = res.data.map((task: Task) => {
                return new Task({
                    id: task.id,
                    name: task.name,
                    description: task.description,
                    dueDate: task.dueDate,
                    startDate: task.startDate,
                    endDate: task.endDate,
                    priority: task.priority,
                    status: task.status,
                });
            });
            return tasks;
        });
    }

    /**
     * Adds new task
     *
     * @returns {Promise<Task>} Returns promise that contains new tasks info.
     */
    public addNewTask = async (newTask: Task): Promise<Task> => {
        const url = this.baseServiceEndpoint + 'Tasks';
        return axios.post(url, JSON.stringify(newTask), {responseType: 'json', headers: { 'Content-Type': 'application/json'}}).then((res: any) => {
            newTask.id = res.data;
            return newTask;
        });
    }

    /**
     * Gets task by ID
     *
     * @returns {Promise<Task>} Returns promise that contains task info.
     */
    public getTaskById = async (id: string): Promise<Task> => {
        const url = this.baseServiceEndpoint + 'Tasks/' + id;
        return axios.get(url).then((res: any) => {
            const data = res.data;          
           
            return new Task({
                id: data.id,
                name: data.name,
                description: data.description,
                dueDate: data.dueDate,
                startDate: data.startDate,
                endDate: data.endDate,
                priority: data.priority,
                status: data.status,
            });
        });
    }

    /**
     * Updates task by ID
     *
     * @returns {Promise<boolean>} Returns promise isUpdated boolean.
     */
    public updateContact = async (task: Task): Promise<boolean> => {
        const url = this.baseServiceEndpoint + 'Tasks/' + task.id;
        return axios.put(url, JSON.stringify(task), {responseType: 'json', headers: { 'Content-Type': 'application/json'}}).then((res: any) => {
            return res.data;
        });
    }

    /**
     * Deletes contact by ID
     *
     * @returns {Promise<boolean>} Returns promise.
     */
    public deleteTasks = async (id: number): Promise<boolean> => {
        const url = this.baseServiceEndpoint + 'Tasks/' + id;
        return axios.delete(url).then((res: any) => {
            return res.data;
        });
    }

    /**
     * Gets all dropDownOptions
     *
     * @returns {Promise<DropDownOptions>} Returns promise that contains dropDownOptions.
     */
    public getAllDropDownOptions = async (): Promise<DropDownOptions> => {
        const url = this.baseServiceEndpoint + 'Constants';
        return axios.get(url).then((res: any) => {
            return new DropDownOptions({
                ContactFreqOptions: res.data.contactFreqOptions,
                ContactMethodOptions: res.data.contactMethodOptions,
            });
        });
    }
}

export const apiService = new ApiService();