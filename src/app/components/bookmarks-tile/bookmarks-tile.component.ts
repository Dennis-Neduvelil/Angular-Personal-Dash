import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/shared/bookmarks.model';

@Component({
  selector: 'app-bookmarks-tile',
  templateUrl: './bookmarks-tile.component.html',
  styleUrls: ['./bookmarks-tile.component.scss']
})
export class BookmarksTileComponent implements OnInit {

  constructor() { }

  @Input() bookmark:Bookmark
  @Input() name:string
  @Input() url:string

  ngOnInit(): void {
  }

}
