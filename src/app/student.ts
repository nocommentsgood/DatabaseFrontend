import { Courses } from "./Courses";

export interface Student {
    id: number;
    firstName: string;
    lastName: string;
    studentYear: number;
    studentCourses: Array<Courses>;
    balance: number;

    
}