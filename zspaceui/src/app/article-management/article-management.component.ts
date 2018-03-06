import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { HelpService } from '../services/help.service';
@Component({
  selector: 'app-article-management',
  templateUrl: './article-management.component.html',
  styleUrls: ['./article-management.component.css']
})
export class ArticleManagementComponent implements OnInit {

  articles;
  constructor(private articleService: ArticlesService, private helpService: HelpService) { }

  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles() {
    const user = this.helpService.getCurrentUser();
    this.articleService.getArticlesByUser(user.userid).subscribe(res => {
      this.articles = res;
    });
  }

}
