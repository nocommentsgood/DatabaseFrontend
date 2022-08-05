import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = []

  student: Student = {
    id: 1,
    firstName: 'TestStudent',
    lastName: 'StudentTest',
    studentYear: 0,
    studentCourses: [],
    balance: 0
  };

  constructor(private studentService: StudentService) { }

  selectedStudent?: Student;
  
  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(students => this.students = students);
  }

}
