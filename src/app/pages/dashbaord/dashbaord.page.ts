import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.page.html',
  styleUrls: ['./dashbaord.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DashbaordPage implements OnInit {
  public images = ['assets/image/first.jpg', 'assets/image/second.jpg', 'assets/image/third.png'];
  constructor() { }

  ngOnInit() {
  }

}
