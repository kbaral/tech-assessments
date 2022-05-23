export class Task {
    id: number;
    name: string;
    description: string;
    dueDate: Date;
    startDate: Date;
    endDate: Date;
    priority: string;
    status: string;

    constructor(data: any){
        this.id = data.id;
        this.name = data.name;
        this.description= data.description;
        this.dueDate = data.dueDate;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.priority = data.priority;
        this.status = data.status;

    }
}

export class DropDownOptions {
    public PriorityOptions: string[];
    public StatusOptions: string[];

    constructor(data: any) {
        this.PriorityOptions = data.PriorityOptions;
        this.StatusOptions = data.StatusOptions;
    }
}