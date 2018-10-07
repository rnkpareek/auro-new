import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,) { }
role="admin"
  ngOnInit() {
  }
  test(){

  	if(this.role=="admin"){
  		this._router.navigate(['/app/admin']);
  	}
  	else{
  	    this._router.navigate(['/app/user']);	
  	}
  	
  }

}
