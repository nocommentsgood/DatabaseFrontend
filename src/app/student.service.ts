import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Observable, of } from 'rxjs';


// TODO: in the future, this will get data from the database,
// instead of fake data from here
@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor() { }

  getStudents(): Observable<Student[]> {
    const students = of(STUDENTS);
    return students;
  }
}
