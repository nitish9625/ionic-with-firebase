import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink, RouterLinkActive]
})
export class MenuPage implements OnInit {
  public appPages = [
    { title: 'Home', url: '/', icon: 'archive' },
    { title: 'Dashboard', url: '/menu', icon: 'archive' },
    { title: 'profile', url: '/menu/profile', icon: 'mail' },
    { title: 'Donner List', url: '/menu/doneter-list', icon: 'paper-plane' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
