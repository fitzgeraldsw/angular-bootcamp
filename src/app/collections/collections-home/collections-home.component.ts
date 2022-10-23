import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'James', age: 24, job: 'UI Designer', employed: true },
    { name: 'Jill', age: 26, job: 'Software Engineer', employed: false }, 
    { name: 'Elyse', age: 25, job: 'Software Engineer', employed: true }, 
  ];

  headers = [
    { key: 'employed', label: 'has a job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
