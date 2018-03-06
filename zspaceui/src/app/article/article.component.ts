import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { HelpService } from '../services/help.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles;

  constructor(private articleService: ArticlesService, private helpService: HelpService) { }

  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles() {
    const user = this.helpService.getCurrentUser();
    this.articleService.getAllArticles().subscribe(res => {
      this.articles = res;
    });
  }
}
