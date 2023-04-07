import { AvatarService } from './../../core/avatar.service';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AddUserListService } from 'src/app/core/add-user-list.service';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  profile:any;
  donerList:any;;
  constructor(
    private authService:AuthService,
    private router:Router,
    private avatarService:AvatarService,
    private loadingController:LoadingController,
    private alertController:AlertController,
    private UserListservice: AddUserListService,
    private auth: Auth
  ) {
    this.avatarService.getUserProfile().subscribe((data)=>{
      this.profile = data;
    })
  }

  ngOnInit() {
    this.getDonner();
  }

 async getDonner(){
    const loading = await this.loadingController.create();
    await loading.present();
   this.UserListservice.getUserList()
    .subscribe(res=>{
     console.log(res);
     const user = this.auth.currentUser;
      const list:any[] = res.filter(u=> u.uid === user?.uid);
      const allData:any[] = [];
      list.map((x)=>{
        console.log(x);
          if(x.appointment){

            allData.push(x);
          }
        })
        console.log(allData);
        this.donerList = allData;
    }, (err)=>{
      console.log(err);

    });
    await loading.dismiss();
  }

 async logout(){
   await this.authService.logout();
   this.router.navigateByUrl('/', {replaceUrl:true});
  }


}
