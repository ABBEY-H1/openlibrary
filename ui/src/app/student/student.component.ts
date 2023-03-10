import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students = [
    {
      "id": 1,
      "name": "Abhranil",
      "rollNo": "04",
      "dept": "ECE",
      "birthDay": "30-06-2002",
      "mobile": "6290487437"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
