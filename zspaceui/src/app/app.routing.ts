import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';

import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { BookManagementComponent } from './book-management/book-management.component';
import { BookArticleComponent } from './book-management/book-article/book-article.component';
import { ArticleComponent } from './article/article.component';
import { ArticleManagementComponent } from './article-management/article-management.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'register', component: RegistrationComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'books', component: BookComponent },
    { path: 'login', component: LoginComponent },
    { path: 'bookManagement', component: BookManagementComponent },
    { path: 'bookArticle/:id', component: BookArticleComponent },
    { path: 'articles', component: ArticleComponent },
    { path: 'articleManagement', component: ArticleManagementComponent },
    { path: '**', component: NotFoundComponent }
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
