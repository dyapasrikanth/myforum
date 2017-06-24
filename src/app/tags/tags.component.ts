import { Component, OnInit } from '@angular/core';

import { Tag } from './tag';
import { TagsService } from './tags.service';
@Component({
  selector: 'forum-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
    tags: Tag[] = [];

    tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private tagsService: TagsService) { }

  ngOnInit(): void {
    this.tagsService.getTags()
      .then(tags => this.tags = tags);
  }
}