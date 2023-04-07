import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ReactiveFormsModule]
})
export class RegisterPage implements OnInit {

  credentials !:FormGroup;
  constructor(
    private fb:FormBuilder,
    private loadingController:LoadingController,
    private alertController:AlertController,
    private authService:AuthService,
    private router:Router
  ) { }

  //Easy access for form fields
  get email(){
    return this.credentials.get('email');
  }

  get password(){
    return this.credentials.get('password');
  }

  ngOnInit() {
      this.credentials = this.fb.group({
        email:['', [Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(6)]]
      })
  }

  async register(){
    const loading = await this.loadingController.create();
    await loading.present();
    const user = await this.authService.register(this.credentials.value);
    await loading.dismiss();

    if(user){
      this.router.navigateByUrl('/menu', {replaceUrl:true});
    }else{
      this.showAlert('Registration failed', 'Please try again');
    }

  }

  async showAlert(header, message){
    const alert = await this.alertController.create({
      header,
      message,
      buttons:['Ok']
    });
    await alert.present();
  }
}
