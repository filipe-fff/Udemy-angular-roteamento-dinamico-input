import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserContainerComponent } from './components/user-container/user-container.component';

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
        path: "user/:userId",
        title: "Área de usuário",
        component: UserContainerComponent
    },
    {
        path: "**",
        title: "Página não Encontrada",
        component: PageNotFoundComponent
    }
];
