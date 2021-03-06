import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {
  }
async onResetPassword(email){
    try{
      await this.authSvc.resetPassword(email.value);
      this.router.navigate(['/login']);
      console.log('Email', email);
    }
    catch (error){
      console.log('Error=>', error);
  }
    
  }
}
