export interface Task {
  content: string;
  id: number;
  checked: boolean;
  priority: number; 
}

export interface List {
  id: number;
  name: string;
  priority: number; 
  tasks: Task[];
}
