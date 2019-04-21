import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-item',
  templateUrl: './posts-item.component.html',
  styleUrls: ['./posts-item.component.scss']
})
export class PostsItemComponent implements OnInit {
  @Input() post
  postDetail;
  constructor(
    private _postService: PostsService
  ) { }

  ngOnInit() {
  }
  onClickArticle(id){
    console.log('id:',id);
    this.postDetail = null;
    this._postService.detailCategory(id);
    this.postDetail = this._postService.cast
  }

}
