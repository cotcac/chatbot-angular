import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts;
  category: string;
  constructor(
    private _postService: PostsService,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activeRoute.paramMap.subscribe(p =>{
      const id:string = p.get('id');
      if(id){
        this.category = id;
        this._postService.category(id).subscribe((res) => {
          this.posts = res.data;
        })
      }else{
        this.category ="New Posts"
        this._postService.newPosts().subscribe((res) => {
          this.posts = res.data;
        })
      }
    })
  }
}
