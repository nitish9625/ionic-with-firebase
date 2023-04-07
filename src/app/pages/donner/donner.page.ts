import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddUserListService } from 'src/app/core/add-user-list.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-donner',
  templateUrl: './donner.page.html',
  styleUrls: ['./donner.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DonnerPage implements OnInit {
  allList:any[];
  alldata: any;
  booldGroup:any;
  constructor(private UserListservice: AddUserListService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.getAll();
  }

 async getAll(){
  const loading = await this.loadingController.create();
    await loading.present();
    this.UserListservice.getUserList()
     .subscribe(res=>{

       this.allList = res;
       this.alldata = [...res];
     }, (err)=>{
       console.log(err);
     });
     await loading.dismiss();
   }

   handleChange(event) {
    const query = event.target.value.toLowerCase();
    console.log("query", query);
    console.log("booldGroup", this.booldGroup);

      if(query){
        this.allList = this.alldata.filter(d=>d.name.toLowerCase().indexOf(query) > -1 || d.booldGroup.toLowerCase().indexOf(query) > -1
        || d.address.toLowerCase().indexOf(query) > -1);
      }else{
        this.allList = [...this.alldata];
      }



    // this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

  selectOption(){
    console.log("group", this.booldGroup);
    this.booldGroup = null;
  }

  clear(){
    console.log("this is clear");
    this.getAll();
  }

}
