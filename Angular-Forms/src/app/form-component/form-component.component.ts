import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  @ViewChild('vform') vform;

  hidePassword: boolean = true;
  inputType: string = "password";

  constructor(private router: Router,){

  }

  ngOnInit() {
    
  }

  toggleShowPassword() {
    let data = document.getElementById("exampleInputPassword1");
   
    this.hidePassword = !this.hidePassword;
    this.inputType = "password";
    if(!this.hidePassword){
      this.inputType = "text";
    }
  }

  submit() {
    console.log(this.vform);
    console.log(this.vform.value);
  }

  goToReactiveForm(){
    this.router.navigate(['/reactive']);
  }

  goToLazyLoading(){
    this.router.navigate(['/lazy']);
  }

}
