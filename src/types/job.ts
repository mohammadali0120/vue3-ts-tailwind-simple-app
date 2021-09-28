// interfaces
export interface Job {
  id: string;
  img: string;
  title: string;
  location: string;
  salary: number;
  description: string;
}

// types
export type OrderTerm = "location" | "title" | "salary";
