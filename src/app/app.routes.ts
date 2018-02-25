import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaselistComponent } from './baselist/baselist.component';

export const appRoutes: Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'baselist'
}, {
    path: 'baselist',
    component: BaselistComponent
}];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
