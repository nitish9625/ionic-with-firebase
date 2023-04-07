import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddUserListService } from 'src/app/core/add-user-list.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-doneter',
  templateUrl: './add-doneter.page.html',
  styleUrls: ['./add-doneter.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AddDoneterPage implements OnInit {
  doneterForm !: FormGroup;
  id:string;
  constructor(private fb: FormBuilder, private addUserSerice: AddUserListService, private loadingController:LoadingController, private router:Router, private _route:ActivatedRoute) {
    this.id = _route.snapshot.paramMap.get('id') as string;


    this.doneterForm = this.fb.group({
      name:['', Validators.required],
      booldGroup:['', Validators.required],
      address:['', Validators.required],
      age:['', Validators.required]
    })
   }

   get name(){
    return this.doneterForm.get("name") as FormControl;
   }
   get booldGroup(){
    return this.doneterForm.get("booldGroup") as FormControl;
   }
   get address(){
    return this.doneterForm.get("address") as FormControl;
   }
   get age(){
    return this.doneterForm.get('age') as FormControl;
   }

  ngOnInit() {
    if(this.id){
      this.getListById();
    }
  }

  getListById(){
    this.addUserSerice.getNoteById(this.id)
    .subscribe(res=>{
      console.log(res);
      this.name.setValue(res.name);
      this.booldGroup.setValue(res.booldGroup);
      this.address.setValue(res.address);
      this.age.setValue(res.age);
    })
  }

 async submit(){
     const loading = await this.loadingController.create();
     await loading.present();
     if(this.id){
        this.addUserSerice.updateNote(this.id, this.doneterForm.value);
     }else{
      this.addUserSerice.addDoneter(this.doneterForm.value)
     }

    await loading.dismiss();
    this.doneterForm.reset();
    this.router.navigate(['/menu/doneter-list']);

  }


}
