import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { TodosComponent } from './components/user-container/components/todos/todos.component';
import { AlbumsComponent } from './components/user-container/components/albums/albums.component';
import { PostsComponent } from './components/user-container/components/posts/posts.component';

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
        component: UserContainerComponent,
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "todos"
            },
            {
                path: "todos",
                component: TodosComponent
            },
            {
                path: "albums",
                component: AlbumsComponent
            },
            {
                path: "posts",
                component: PostsComponent
            }
        ]
    },
    {
        path: "**",
        title: "Página não Encontrada",
        component: PageNotFoundComponent
    }
];
