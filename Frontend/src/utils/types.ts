export interface  Student {
    id?: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    birthDate: string;
    classe: Class;
}

export interface Class {
    id?: string;
    name: string;
    schoolYear: number;
    level: string;
    grade: number;
    students?: Student[];
}

export interface Teacher {
  id?: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthDate: string;
  speciality: string;
}

export interface Headmaster {
  id?: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthDate: string;
}


