import { Component, OnInit } from '@angular/core';
import { CourseNames } from '../CourseNames';
import { Courses } from '../Courses';
import { StudentService } from '../student.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courseNameArray: CourseNames[] = [];



  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.studentService.getCourses().subscribe(courses => this.courseNameArray = courses);
  }

  /*
  add(courseID: number, courseName: string, courseCost: number): void {
    courseName.trim();
    if (!courseName) { return; }
    this.studentService.addCourse({ courseID, courseName, courseCost } as Courses)
    .subscribe(course => {
      this.courses.push(course);
    })
  }

  delete(course: Courses): void {
    this.courses = this.courses.filter(h => h !== course);
    this.studentService.deleteCourse(course.courseID).subscribe();
  }*/

}