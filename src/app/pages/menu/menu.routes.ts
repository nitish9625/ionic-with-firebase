import { Routes } from "@angular/router";
import { MenuPage } from "./menu.page";

export const routes: Routes = [
  {
    path:'',
    component:MenuPage,
    children:[
      {
        path:'',
        redirectTo:'/menu/home',
        pathMatch:'full'
      },
      {
        path: 'folder/:id',
        loadComponent: () =>
          import('../../folder/folder.page').then((m) => m.FolderPage),
      },
      {
        path: 'home',
        loadComponent: () => import('../home/home.page').then( m => m.HomePage)
      },
      {
        path: 'profile',
        loadComponent: () => import('../profile/profile.page').then( m => m.ProfilePage)
      },
      {
        path: 'doneter-list',
        loadComponent: () => import('../doneter-list/doneter-list.page').then( m => m.DoneterListPage)
      }
    ]
  },
  {
    path:'',
    redirectTo:'/menu/home',
    pathMatch:'full'
  }
]
