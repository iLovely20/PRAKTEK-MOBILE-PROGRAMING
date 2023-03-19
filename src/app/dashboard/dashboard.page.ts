import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  form = {
    email : localStorage.getItem('email'),
    password : ''
  }

  constructor(
    private router : Router
  ) { }



  doLogout(){
    this.router.navigateByUrl('login')
  }

  ngOnInit() {
  }

}
