import { Component } from '@angular/core';
import { HomeHeaderComponent } from '../../components/home-header/home-header.component';
import { NewsPostComponent } from './components/news-post/news-post.component';
import { NoticeComponent } from './components/notice/notice.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [HomeHeaderComponent, NewsPostComponent, NoticeComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

}
