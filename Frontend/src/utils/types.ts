export interface  Student {
    id?: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    birthDate: string;
    studentClass: number;
}

export interface Class {
    id?: number;
    name: string;
    schoolYear: number;
    level: string;
    grade: number;
    students?: Student[];
}



export interface Teacher {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthDate: string;
  specialty: string;
}

export interface Staff {
  id?: number;
  firstname: string;
  lastname: string;
  role: string;
  salary: number;
}

export interface Headmaster {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthDate: string;
}

export interface  Classroom {
  id?: number;
  capacity: number;
  floorNumber: number;
  roomNumber: number;
}

export interface Course {
  date: string;
  time?: string;
  status: boolean;
  classe: { id: number};
  classroom: {id: number};
  subject: {id: number};
  teacher: {id: number};
}

export interface  Subject {
  id?: number;
  name: String;
}

