import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  signupForm! : FormGroup;

  constructor(private fb:FormBuilder){
    console.log('Signup component constructor called');
  }

  ngOnInit() : void{
    console.log('Signup Component initialized');

    this.signupForm = this.fb.group({
      name: ['',[Validators.required,Validators.minLength(2)]],
      email:['',[Validators.required,Validators.email]],
      contact:['',[Validators.required,Validators.pattern(/^\d{10}$/)]]

    });
  }

  onSubmit(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value);
  }}


  resetIfInvalid(){
    this.signupForm.reset();
  
    }
  }