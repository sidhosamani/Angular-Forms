import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  forms: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.forms = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    });
  }

  submit() {
    console.log(this.forms.value);
  }

  goToTemplateForm(){
    this.router.navigate(['/template']);
  }

}
