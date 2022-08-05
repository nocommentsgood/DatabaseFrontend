import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = []

  selectedStudent?: Student;

  student: Student = {
    id: 1,
    firstName: 'TestStudent',
    lastName: 'StudentTest',
    studentYear: 0,
    studentCourses: [],
    balance: 0
  };

  constructor(private studentService: StudentService, private messageService: MessageService) { }

  
  
  onSelect(student: Student): void {
    this.selectedStudent = student;
    this.messageService.add('StudentComponent: Selected student id=${student.id}');
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(students => this.students = students);
  }

}
