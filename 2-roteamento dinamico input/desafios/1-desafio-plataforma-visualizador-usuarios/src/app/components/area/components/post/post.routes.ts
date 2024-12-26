import { Routes } from "@angular/router";
import { CommentsComponent } from "../comments/comments.component";

export const PostRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("../post/post.component").then((m) => m.PostComponent),
        children: [
            {
                path: "comments",
                title: "Comentários",
                component: CommentsComponent
            }
        ]
    },
];