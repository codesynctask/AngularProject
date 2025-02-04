import { Routes } from '@angular/router';
import { HomePageComponent } from '../components/home-page/home-page.component';
import { AboutComponent } from '../components/about/about.component';
import { ProjectsComponent } from '../components/projects/projects/projects.component';
import { ContactComponent } from '../components/contact/contact.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { CalculatorComponent } from '../components/projects/calculator/calculator.component';
import { BlogSiteComponent } from '../components/projects/blog-site/blog-site.component';
import { ECommerceAppComponent } from '../components/projects/e-commerce-app/e-commerce-app.component';
import { ToDoAppComponent } from '../components/projects/to-do-app/to-do-app.component';
import { ProjectHomeComponent } from '../components/projects/project-home/project-home.component';

export const routes: Routes = [
    {
        path:"",
        component:HomePageComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"projects",
        component:ProjectsComponent,
        children:[
            {
                path:"",
                component:ProjectHomeComponent
            },
            {
                path:"calculator",
                component:CalculatorComponent
            },
            {
                path:"blogSite",
                component:BlogSiteComponent
            },
            {
                path:"eCommerceApp",
                component:ECommerceAppComponent
            },
            {
                path:"toDoApp",
                component:ToDoAppComponent
            },
        ]
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"**",
        component:PageNotFoundComponent
    }
];
