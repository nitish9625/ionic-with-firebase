import { Injectable } from '@angular/core';
import {Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { Observable, map } from 'rxjs';

interface AddDoneter{
  name: string;
  booldGroup: string;
  address: string;
  age:string;
  uid?:string;
}


@Injectable({
  providedIn: 'root'
})
export class AddUserListService {

  constructor(private sf:Firestore, private auth:Auth) {

  }

  getUserList():Observable<any[]>{
    const user = this.auth.currentUser
    const doneterList = collection(this.sf, 'doneter')
    return collectionData(doneterList,{idField:'id'}) as Observable<any[]>;
  }

  getNoteById(id): Observable<any>{
    const noteDocRef = doc(this.sf, `doneter/${id}`);
    return docData(noteDocRef, {idField:'id'}) as Observable<any>;
  }

  addDoneter(data:AddDoneter){
    const user = this.auth.currentUser;
    const doneter:AddDoneter ={
      name: data.name,
      booldGroup: data.booldGroup,
      address: data.address,
      age: data.age,
      uid: user?.uid
    }
    const notesRef = collection(this.sf, 'doneter');
    return addDoc(notesRef, doneter);
  }

  deleteDoneter(id:string){
    const noteDocRef = doc(this.sf, `doneter/${id}`);
    return deleteDoc(noteDocRef);
  }

  updateNote(id:string, data:any){
    const noteDocRef = doc(this.sf, `doneter/${id}`);
    return updateDoc(noteDocRef, data);
  }


}
