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
  speciality: string;
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

export interface  Subject {
  id?: number;
  name: String;
}

/*export enum SubjectName {
  MATHEMATICS = "MATHEMATICS", 
  SCIENCE = "SCIENCE", 
  PHYSICS = "PHYSICS", 
  CHEMISTRY = "CHEMISTRY", 
  GEOGRAPHY = "GEOGRAPHY", 
  HISTORY = "HISTORY", 
  FRENCH = "FRENCH", 
  ENGLISH = "ENGLISH"
}

export enum StaffRole {
  CLEANER = "CLEANER", 
  COOK = "COOK", 
  LIBRARIAN = "LIBRARIAN", 
  SECRETARY = "SECRETARY", 
  MANAGER = "MANAGER"
}
*/
