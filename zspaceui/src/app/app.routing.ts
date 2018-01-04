import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { BookManagementComponent } from './book-management/book-management.component';
import { ArticleComponent } from './article/article.component';
import { ArticleManagementComponent } from './article-management/article-management.component';
import { Component } from '@angular/core/src/metadata/directives';
const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'books', component: BookComponent },
    { path: 'login', component: LoginComponent },
    { path: 'bookManagement', component: BookManagementComponent },
    { path: 'articles', component: ArticleComponent },
    { path: 'articleManagement', component: ArticleManagementComponent }
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
