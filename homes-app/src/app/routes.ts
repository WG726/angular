import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const routeConfig: Routes = [
    {
        path: '', // empty because we want this to be the default page
        component: HomeComponent,
        title: 'Home Page'

    }
];

export default routeConfig;