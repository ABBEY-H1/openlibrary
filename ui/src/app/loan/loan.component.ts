import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loans : any= [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.fetchAll();
  }
fetchAll(){
  this.http.get("http://localhost:8080/LoanController/getAllLoans")
  .subscribe(response => {
    this.loans = response;
    console.log(response);
  },
  error=>{
    console.error(error);
  })
}

addLoan(){
  this.router.navigateByUrl("/add-loan")
}
deleteLoan(id: Number){
  this.http.delete("http://localhost:8080/LoanController/deleteLoan/"+id)
  .subscribe(resp => {
    console.log(resp);
    this.fetchAll();
  },
  error => {
    console.log(error);
  })

}

}
