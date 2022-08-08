import { Injectable } from '@angular/core';
import { Student } from './student';
import { STUDENTS } from './mock-students';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


// TODO: in the future, this will get data from the database,
// instead of fake data from here
@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private messageService: MessageService) { }

  getStudents(): Observable<Student[]> {
    const students = of(STUDENTS);
    this.messageService.add('StudentService: fetched students');
    return students;
  }

  // this can be rewritten to make http request without changing StudentDetailComponent
  getStudent(id: number): Observable<Student> {
    const student = STUDENTS.find(h => h.id === id)!;
    this.messageService.add(`StudentService: fetched student id=${id}`);
    return of(student);
  }
}
