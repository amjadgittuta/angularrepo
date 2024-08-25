import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'courseapp';

  coreCourse:Course = COURSES[0];
  rxJSCourse:Course = COURSES[1];
  ngRXCourse:Course = COURSES[2];

  onCourseSelected(course: Course) {
    console.log('App Component - Click event bubbled', course);
  }

}
