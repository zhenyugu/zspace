import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookArticleComponent } from './book-article.component';

describe('BookArticleComponent', () => {
  let component: BookArticleComponent;
  let fixture: ComponentFixture<BookArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
