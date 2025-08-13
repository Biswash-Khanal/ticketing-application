export type TypeParams = {
    params:{
        id:string
    }
}

export type TypeCategory = {
    category:string;
}

export type TypeTicket = {
  _id?: string;          
  title: string;
  description: string;
  category: string;
  priority: number;
  progress: number;
  status: string;
  active?: boolean;      
  createdAt?: string;    
  updatedAt?: string;    
};

export type TypeTicketCreate = {
         
ticket:TypeTicket
}


export type ProgressBarProps = {
  progress: number; // 0 to 100
  color?: string;   // Tailwind color class, default: "bg-blue-600"
  height?: string;  // Tailwind height class, default: "h-2.5"
};

export type StatusBarProps = {
    status:string;
};
