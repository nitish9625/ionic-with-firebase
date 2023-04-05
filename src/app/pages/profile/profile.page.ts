import { AvatarService } from './../../core/avatar.service';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfilePage implements OnInit {
  profile:any;
  displayName:string;
  constructor(
    private authService:AuthService,
    private router:Router,
    private avatarService:AvatarService,
    private loadingController:LoadingController,
    private alertController:AlertController
  ) {
    this.avatarService.getUserProfile().subscribe((data)=>{
      this.profile = data;
      console.log(this.profile);
    })
  }

  ngOnInit() {
    this.getdisplayName();
  }

  getdisplayName(){
    const user =  this.avatarService.getprofileDetails();

   this.displayName = user?.displayName as string;
  }


 async changeImage(){
    const image = await Camera.getPhoto({
      quality:90,
      allowEditing:true,
      resultType: CameraResultType.Base64,
      source:CameraSource.Photos
    });

    console.log(image);
    if(image){
      const loading = await this.loadingController.create();
      await loading.present();
      const result = await this.avatarService.uploadImage(image);
      await loading.dismiss();

      if(!result){
        const alert = await this.alertController.create({
          header:'Upload failed',
          message:'There was a problem uploading your avatar.',
          buttons:['Ok']
        });
        await alert.present();
      }
    }
  }

 async updateDisplayName(displayName:any){
    const loading = await this.loadingController.create();
    await loading.present();
    this.avatarService.updateProfile(displayName).then(async res=>{
      await loading.dismiss();
      const alert = await this.alertController.create({
        header:'Success',
        message:'display Name addedd successfully',
        buttons:['Ok']
      });
      await alert.present();

      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }
}
