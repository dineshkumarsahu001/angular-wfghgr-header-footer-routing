import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
   

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);