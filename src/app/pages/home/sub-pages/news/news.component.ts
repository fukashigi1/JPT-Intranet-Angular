import { Component } from '@angular/core';
import { HomeHeaderComponent } from '../../components/home-header/home-header.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [HomeHeaderComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

}
