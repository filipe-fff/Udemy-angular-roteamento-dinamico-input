import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';
import { NotFoundComponent } from './components/area/components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "usersList"
    },
    {
        path: "area",
        title: "Área",
        loadChildren: () => import("./components/area/area.routes").then(m => m.AreaRoutes)
    },
    {
        path: "usersList",
        title: "Lista de Usuários",
        component: UsersListComponent
    },
    {
        path: "**",
        title: "Página não Encontrada",
        component: NotFoundComponent
    }
];