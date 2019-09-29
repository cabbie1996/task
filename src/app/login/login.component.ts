import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }


  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  ngOnInit() { }

  signIn() {
   
      if (this.loginForm.valid) {
        if (this.loginForm.controls.username.value == "nuri" && this.loginForm.controls.password.value == "123456") {  
          localStorage.setItem('access_token', 'xyz#123*999');
          this.router.navigate(["/dashboard/home"]);
        }
        else {
          alert("wrong password")
        }
    }
  }


}
