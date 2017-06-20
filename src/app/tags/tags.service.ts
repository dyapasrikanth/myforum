import { Tag } from './tag';
import { TAGS } from './mock-tags';
import { Injectable } from '@angular/core';

@Injectable()
export class TagsService {
  getTags(): Promise<Tag[]> {
    return Promise.resolve(TAGS);
  }
}