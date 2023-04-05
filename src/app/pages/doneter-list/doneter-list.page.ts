import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AddUserListService } from 'src/app/core/add-user-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doneter-list',
  templateUrl: './doneter-list.page.html',
  styleUrls: ['./doneter-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class DoneterListPage implements OnInit {
  allList:any;
  constructor(private UserListservice: AddUserListService) {

   }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
   this.UserListservice.getUserList()
    .subscribe(res=>{
      this.allList = res;
    }, (err)=>{
      console.log(err);
    })
  }

}
