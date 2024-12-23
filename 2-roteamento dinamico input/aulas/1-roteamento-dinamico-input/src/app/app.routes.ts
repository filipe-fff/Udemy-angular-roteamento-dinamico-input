import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "users"
    },
    {
        path: "users",
        component: UsersComponent,
        children: [
            {
                path: "posts/:userId",
                component: PostsComponent
            }
        ]
    },
    // {
    //     path: "posts/:userId",
    //     component: PostsComponent
    // }
];