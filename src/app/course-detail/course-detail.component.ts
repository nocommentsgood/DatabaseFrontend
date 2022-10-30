import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../student.service';
import { Courses } from '../Courses';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})



export class CourseDetailComponent implements OnInit {

  @Input() course?: Courses;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) { }

  ngOnInit(): void {
    //this.getCourses();
  }

  // get courses student is enrolled in
  /*getCourses(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studentService.getCourses(id).subscribe(course => this.course = course);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.course) {
      this.studentService.updateCourse(this.course).subscribe(() => this.goBack());
    }
  }*/

}