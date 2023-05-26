import { Component, OnInit } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

interface Search {
  title: string;
  snippet: string;
  pageid: number;
 }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pages: Search[] = [];

  constructor(private wikiservice: WikipediaService) {}

  ngOnInit(): void {}

  onTerm(term: string) {
    this.wikiservice.search(term).subscribe((response) => {
      this.pages = response;
    });
  }
}
