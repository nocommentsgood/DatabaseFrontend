import { Courses } from "./Courses";
import { Student } from "./student";

export const STUDENTS: Student[] = [
    { id: 12, firstName: 'Jeff', lastName: 'Bezos', studentYear: 1, studentCourses: [Courses["Chemistry 101"]], balance: 0},
    { id: 14, firstName: 'Alexis', lastName: 'LaRose', studentYear: 3, studentCourses: [Courses["English 101"]], balance: 0},
    { id: 16, firstName: 'Grant', lastName: 'McKern', studentYear: 2, studentCourses: [Courses["History 101"], Courses["History 101"]], balance: 0},
    { id: 18, firstName: 'Maddie', lastName: 'McKain', studentYear: 1, studentCourses: [Courses["Chemistry 101"], Courses["Computer Science 101"], Courses["History 101"]], balance: 0},
    { id: 20, firstName: 'Nolan', lastName: 'Somelastname', studentYear: 4, studentCourses: [Courses["Chemistry 101"], Courses["Computer Science 101"]], balance: 0},
    { id: 22, firstName: 'Yash', lastName: 'Sisotia', studentYear: 3, studentCourses: [Courses["History 101"]], balance: 0},

];