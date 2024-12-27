import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersListComponent } from './components/users-list/users-list.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "users-list"
    },
    {
        path: "users-list",
        title: "Lista de usuários",
        component: UsersListComponent
    },
    {
        path: "**",
        title: "Página não Encontrada",
        component: PageNotFoundComponent
    }
];
