import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../entities/article';
import { AppConfigService } from '../../services/app-config.service';
import { HelpService } from '../../services/help.service';
import { BookHistoryService } from '../../services/book-history.service';

import { BookHistory } from '../../entities/book-history';

@Component({
  selector: 'app-book-article',
  templateUrl: './book-article.component.html',
  styleUrls: ['./book-article.component.css']
})
export class BookArticleComponent implements OnInit {
  title;
  editorContent;
  options;
  bookhistoryid;
  bookHistory: BookHistory;

  constructor(private articleService: ArticlesService, private activatedRoute: ActivatedRoute,
    private bookHistoryService: BookHistoryService, private router: Router,
    private appConfigService: AppConfigService, private helpService: HelpService) { }

  ngOnInit() {
    this.editorContent = '';

    this.options = {
      'heightMin': 200
    };

    this.activatedRoute.params.subscribe((params: Params) => {
      this.bookhistoryid = params['bookhistoryid'];
      console.log(this.bookhistoryid);
      this.bookHistoryService.getBookHistoryById(this.bookhistoryid).subscribe(res => {
        if (res.length > 0) {
          this.bookHistory = res[0];
        }
      });
    });
  }

  onSubmit() {
    const user = this.helpService.getCurrentUser();
    if (user.userid === null || user.username === null) {
      return;
    }

    const article: Article = new Article();
    article.title = this.title;
    article.articletype = 'b';
    article.mainbody = this.editorContent;
    article.isbookarticle = 'Y';
    article.bookhistoryid = this.bookhistoryid;
    article.status = 0;
    article.userid = Number.parseInt(user.userid);

    this.articleService.addArticle(article).subscribe(res => {
      console.log(res);
      const bookHisotry = this.bookHistory;
      bookHisotry.hasArticle = 1;
      this.bookHistoryService.updateBookHistory(this.bookHistory).subscribe(data => {
        this.router.navigate(['register']);
      });
    });
    console.log(this.editorContent);
  }

  saveAsDraft() {

  }


}
