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

  constructor(private tagsService: TagsService) { }

  ngOnInit(): void {
    this.tagsService.getTags()
      .then(tags => this.tags = tags);
  }
}