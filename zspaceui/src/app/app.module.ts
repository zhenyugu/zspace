import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksService } from './services/books.service';
import { BookHistoryService } from './services/book-history.service';
import { LoginService } from './services/login.service';
import { AppConfigService } from './services/app-config.service';
import { LoginComponent } from './login/login.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { ArticleComponent } from './article/article.component';
import { ArticleManagementComponent } from './article-management/article-management.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DashboardComponent,
    LoginComponent,
    BookManagementComponent,
    ArticleComponent,
    ArticleManagementComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BooksService, LoginService, AppConfigService, BookHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
