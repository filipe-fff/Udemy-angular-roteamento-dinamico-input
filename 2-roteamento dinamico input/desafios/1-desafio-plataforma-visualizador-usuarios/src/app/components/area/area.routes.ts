import { Routes } from "@angular/router";
import { AreaComponent } from "./area.component";
import { TodosComponent } from "./components/todos/todos.component";
import { AlbumsComponent } from "./components/albums/albums.component";
import { PostsComponent } from "./components/posts/posts.component";

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
                title: "Todos",
                component: TodosComponent
            },
            {
                path: "albums",
                title: "Album",
                component: AlbumsComponent
            },
            {
                path: "posts",
                title: "Postes",
                component: PostsComponent
            },
            {
                path: "post/:id",
                title: "Poste por Id",
                loadChildren: () => import("./components/post/post.routes").then((m) => m.PostRoutes)
            }
        ]
    }
]