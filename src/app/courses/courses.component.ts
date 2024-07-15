import {Component, OnInit} from '@angular/core';
import {NgFor} from "@angular/common";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit {
  public msg = '';
  public isDisabled: boolean = true;
  public name: string = '';

  onUpdate(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
    console.log(this.name);
  }

  public messaggio: string = '';

  courses = [
    {
      image: 'angular.jpg',
      title: 'Angular',
      category: 'Frontend',
      hours: 6,
      price: 59,
      isDisabled: false,
      msg: ''
    },
    {
      image: 'react.png',
      title: 'React',
      category: 'Frontend',
      hours: 6,
      price: 59,
      isDisabled: false,
      msg: ''
    },
    {
      image: 'mysql.png',
      title: 'MySQL',
      category: 'Backend',
      hours: 6,
      price: 59,
      isDisabled: false,
      msg: ''
    },
    {
      image: 'mongodb.webp',
      title: 'MongoDB',
      category: 'Backend',
      hours: 6,
      price: 59,
      isDisabled: true,
      msg: ''
    },
    {
      image: 'fullstack-course.jpg',
      title: 'Complete Full Stack',
      category: 'Full Stack',
      hours: 36,
      price: 299,
      isDisabled: false,
      msg: ''
    },
    {
      image: 'cibersecurity-course.jpg',
      title: 'Foundamentals of Cybersecurity',
      category: 'Cybersecurity',
      hours: 6,
      price: 59,
      isDisabled: false,
      msg: ''
    }
  ];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.messaggio = 'Ciao';
    }, 3000);
  }

  onClick(course: any) {
    console.log("Item added to the cart.");
    this.msg = `${course.title} added to the cart.`;
  }
}
