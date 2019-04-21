import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  post;
  constructor(
    private _postService: PostsService,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activeRoute.paramMap.subscribe(p =>{
      const id:string = p.get('id');
      this._postService.detail(id).subscribe(res => {
        this.post = res;
      })
    })

  }

}
