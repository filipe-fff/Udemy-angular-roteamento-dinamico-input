import { Routes } from "@angular/router";
import { AreaComponent } from "./area.component";
import { TodosComponent } from "./components/todos/todos.component";
import { AlbumsComponent } from "./components/albums/albums.component";
import { PostsComponent } from "./components/posts/posts.component";
import { PostComponent } from "./components/post/post.component";

export const AreaRoutes: Routes = [
    {
        path: "",
        component: AreaComponent,
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
            },
            {
                path: "post/:id",
                loadChildren: () => import("./components/post/post.routes").then((m) => m.PostRoutes)
            }
        ]
    }
]