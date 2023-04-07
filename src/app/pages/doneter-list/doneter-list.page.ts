import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AddUserListService } from 'src/app/core/add-user-list.service';
import { ActivatedRoute } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-doneter-list',
  templateUrl: './doneter-list.page.html',
  styleUrls: ['./doneter-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class DoneterListPage implements OnInit {
  allList:any;
  constructor(private UserListservice: AddUserListService, private auth:Auth, private loadingController: LoadingController) {

   }

  ngOnInit() {
    this.getAll();
  }

 async getAll(){
    const loading = await this.loadingController.create();
    await loading.present();
   this.UserListservice.getUserList()
    .subscribe(res=>{
      const user = this.auth.currentUser;
      this.allList = res.filter(u=> u.uid === user?.uid);
    }, (err)=>{
      console.log(err);
    });
    await loading.dismiss();
  }

}
