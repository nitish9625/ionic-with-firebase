import { AvatarService } from './../../core/avatar.service';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  profile:any;
  constructor(
    private authService:AuthService,
    private router:Router,
    private avatarService:AvatarService,
    private loadingController:LoadingController,
    private alertController:AlertController
  ) {
    this.avatarService.getUserProfile().subscribe((data)=>{
      this.profile = data;
    })
  }

  ngOnInit() {
  }

 async logout(){
   await this.authService.logout();
   this.router.navigateByUrl('/', {replaceUrl:true});
  }


}
