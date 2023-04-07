import { Injectable } from '@angular/core';
import { Auth, getAuth, updateProfile } from '@angular/fire/auth';
import {doc, docData, Firestore, setDoc} from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, StringFormat, uploadString } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { User } from './interface/User';


@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(
    private auth:Auth,
    private firestore:Firestore,
    private storage:Storage
  ) { }

  getUserProfile(){
    const user:any = this.auth.currentUser;
    const userDefRef = doc(this.firestore, `users/${user.uid}`);
    return docData(userDefRef);
  }

  updateProfile(displayName:string){
    const userprofile:any = this.auth.currentUser;
   return updateProfile(userprofile, {
      displayName: displayName,
    });


  }

  getprofileDetails(){
    return this.auth.currentUser;
  }



  async uploadImage(CameraFile:any){
    const user:any = this.auth.currentUser;
    const path = `uploads/${user.uid}/profile.png`;
    const storageRef = ref(this.storage, path);

    try{
      await uploadString(storageRef, CameraFile.base64String, 'base64');
        const imageUrl = await getDownloadURL(storageRef);
        const userDocRef = doc(this.firestore, `users/${user.uid}`);
        await setDoc(userDocRef, {
          imageUrl
        });
         return true
    }catch(e){
      return null;
    }
  }
}
