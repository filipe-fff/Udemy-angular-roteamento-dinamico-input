import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostCommentsComponent } from './components/posts/components/post-comments/post-comments.component';

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
                component: PostsComponent,
                children: [
                    {
                        path: ":postId",
                        component: PostCommentsComponent
                    }
                ]
            }
        ]
    },
    // {
    //     path: "posts/:userId",
    //     component: PostsComponent
    // }
];