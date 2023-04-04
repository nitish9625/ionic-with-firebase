import { Routes } from "@angular/router";
import { MenuPage } from "./menu.page";

export const routes: Routes = [
  {
    path:'',
    component:MenuPage,
    children:[
      {
        path:'',
        redirectTo:'menu/folder/Inbox',
        pathMatch:'full'
      },
      {
        path: 'folder/:id',
        loadComponent: () =>
          import('../../folder/folder.page').then((m) => m.FolderPage),
      },
    ]
  },
  {
    path:'',
    redirectTo:'menu/folder/Inbox',
    pathMatch:'full'
  }
]
