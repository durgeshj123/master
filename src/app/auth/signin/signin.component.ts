import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/core/helpers/routes';
import { ServiceService } from '../authservice/service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public routes = routes;
  password = '';
  show = false;
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  get f() {
    return this.form.controls;
  }
  constructor( private route: Router,private authservice:ServiceService) { }
  ngOnInit() {
 
  }
  submit() {
    if (this.form.invalid) {
      return
    } else {
      this.authservice.login(this.form.value).subscribe((res) => {
        var resp:any=res
        sessionStorage.setItem("token",resp.token)
        this.route.navigate(["/super-admin/dashboard"])

      })
    }
  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}