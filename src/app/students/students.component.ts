import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];

  student: Student = {
    id: 0, 
    firstName: 'TestStudent',
    lastName: 'StudentTest',
    studentYear: 0,
    studentCourses: [],
    balance: 0
  };

  constructor(private studentService: StudentService) { }

  
  
  onSelect(student: Student): void {
    
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(students => this.students = students);
  }

  add(firstName: string): void {
    firstName = firstName.trim();
    if (!firstName) { return; }
    this.studentService.addStudent({ firstName } as Student)
    .subscribe(student => {
      this.students.push(student);
    })
  }

  delete(student: Student): void {
    this.students = this.students.filter(h => h !== student);
    this.studentService.deleteStudent(student.id).subscribe();
  }

}
