import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent implements OnInit {

  publisherForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.publisherForm = this.formBuilder.group({
      name: ['',Validators.required],
      phone: ['',Validators.required],
      email: ['',Validators.required],
      address: ['', Validators.required]
    })
   } 

  savePublisher(){
    let publisherData = this.publisherForm.value;
    this.http.post("http://localhost:8080/PublisherController/savePublisher", publisherData)
    .subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl("/publishers");
    },
    error =>{
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

}
