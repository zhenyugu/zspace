import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'books', component: BookComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)],
    // RouterModule.forRoot(routes, {
    //     useHash: true,
    // })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
