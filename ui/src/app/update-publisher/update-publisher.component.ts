import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-publisher',
  templateUrl: './update-publisher.component.html',
  styleUrls: ['./update-publisher.component.css']
})
export class UpdatePublisherComponent implements OnInit {
  publisher :any=[];
  publisherId: any

  publisherForm : FormGroup;
  constructor( private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private activatedroute: ActivatedRoute) {
    this.publisherForm = this.formBuilder.group({
      id: ['',Validators.required],
      name: ['',Validators.required],
      phone: ['',Validators.required],
      email: ['',Validators.required],
      address: ['', Validators.required]
    })
   } 

  savePublisher(){
    let publisherData = this.publisherForm.value;
    this.http.put("http://localhost:8080/PublisherController/updatePublisher", publisherData)
    .subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl("/publishers");
    },
    error =>{
      console.log(error);
    })
  }

  fetchPublisher(publisherId: Number){
    this.http.get("http://localhost:8080/PublisherController/getPublisherById/"+publisherId)
    .subscribe(resp =>{
      this.publisher=resp;
      console.log(this.publisher)
      this.publisherForm.patchValue({ id: this.publisher.id})
      this.publisherForm.patchValue({ name: this.publisher.name });
      this.publisherForm.patchValue({ phone: this.publisher.phone });
      this.publisherForm.patchValue({ email: this.publisher.email });
      this.publisherForm.patchValue({ address: this.publisher.address });
    },
    error =>{
      console.log(error);
    })

  }

  ngOnInit(): void {
    this.publisherId = this.activatedroute.snapshot.params['id'];
    this.fetchPublisher(this.publisherId);
  }

}