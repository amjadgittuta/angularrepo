import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input({
    required: true
  })
  course: Course | undefined;

  @Output()
  courseSelect = new EventEmitter<Course>();

  onCourseViewed() {
    console.log('Card-Component - Button Clicked');
    if (this.course) {
      this.courseSelect.emit(this.course); // Emit the Course object
    }
  }

}
