import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

// import comonents
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { BookManagementComponent } from './book-management/book-management.component';
import { ArticleComponent } from './article/article.component';
import { ArticleManagementComponent } from './article-management/article-management.component';
import { BookArticleComponent } from './book-management/book-article/book-article.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { UserManagementComponent } from './user-management/user-management.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotFoundComponent } from './not-found/not-found.component';


// import services
import { UsersService } from './services/users.service';
import { HelpService } from './services/help.service';
import { BooksService } from './services/books.service';
import { BookHistoryService } from './services/book-history.service';
import { LoginService } from './services/login.service';
import { AppConfigService } from './services/app-config.service';
import { ArticlesService } from './services/articles.service';
import { ArticleViewComponent } from './article-view/article-view.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DashboardComponent,
    LoginComponent,
    BookManagementComponent,
    ArticleComponent,
    ArticleManagementComponent,
    BookArticleComponent,
    UserManagementComponent,
    RegistrationComponent,
    NotFoundComponent,
    HomeComponent,
    ArticleViewComponent
  ],
  imports: [
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BooksService, LoginService, AppConfigService, BookHistoryService, UsersService, HelpService, ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
