import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  myPost = null;
  constructor(
    private postService: PostsService
  ) { }

  ngOnInit() {
    this.postService.cast.subscribe(res =>{
      this.myPost = res;
    })
  }

}
