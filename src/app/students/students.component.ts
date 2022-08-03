import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../mock-students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = STUDENTS;

  student: Student = {
    id: 1,
    firstName: 'TestStudent',
    lastName: 'StudentTest',
    studentYear: 0,
    studentCourses: [],
    balance: 0
  };

  constructor() { }

  selectedStudent?: Student;
  
  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  ngOnInit(): void {
  }

}
