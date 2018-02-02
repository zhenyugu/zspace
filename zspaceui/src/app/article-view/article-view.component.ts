import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {
  articleId;
  article;
  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticlesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.articleId = params['id'];
      console.log(this.articleId);
      this.getArticle();
    });


  }

  getArticle() {
    this.articleService.getArticleById(this.articleId).subscribe(res => {
      this.article = res[0];
    });
  }

}
