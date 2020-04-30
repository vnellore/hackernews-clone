import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../hacker-news.service';
import { Item } from '../item';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  topStoryItemList = [];

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit(): void {
    this.getTopStories();
  }

  getTopStories(): void {
    this.hackerNewsService.getTopStories().subscribe(topStories => {
      topStories.map(x => {
        this.hackerNewsService.getItemDetail(x)
        .subscribe(topStoryItem => this.topStoryItemList.push(topStoryItem));
      });
    });
  }
}
