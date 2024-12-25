import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "usersList"
    },
    {
        path: "area",
        loadChildren: () => import("./components/area/area.routes").then(m => m.AreaRoutes)
    },
    {
        path: "usersList",
        component: UsersListComponent
    }
];