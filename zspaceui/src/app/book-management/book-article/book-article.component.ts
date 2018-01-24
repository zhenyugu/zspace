import { Component, OnInit } from '@angular/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../entities/article';
import { AppConfigService } from '../../services/app-config.service';
import { HelpService } from '../../services/help.service';

@Component({
  selector: 'app-book-article',
  templateUrl: './book-article.component.html',
  styleUrls: ['./book-article.component.css']
})
export class BookArticleComponent implements OnInit {
  editorContent;
  options;

  constructor(private articleService: ArticlesService, private appConfigService: AppConfigService, private helpService: HelpService) { }

  ngOnInit() {
    this.editorContent = 'kjfkdlajlkfjdlkajk';


    this.options = {
      'heightMin': 200
    };
  }

  onSubmit() {
    const user = this.helpService.getCurrentUser();
    if (user.userid === null || user.username === null) {
      return;
    }

    const article: Article = new Article();
    article.title = 'test';
    article.articletype = 'b';
    article.mainbody = this.editorContent;
    article.isbookarticle = 'y';
    article.bookhistoryid = '32';
    article.status = 0;
    article.userid = Number.parseInt(user.userid);

    this.articleService.addArticle(article).subscribe(res => {
      alert(1);
    });
    console.log(this.editorContent);
  }


}
