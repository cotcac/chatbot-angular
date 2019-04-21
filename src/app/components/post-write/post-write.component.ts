import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { LoginService } from 'src/app/services/login.service';
import { PostsService } from 'src/app/services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-write',
  templateUrl: './post-write.component.html',
  styleUrls: ['./post-write.component.scss']
})
export class PostWriteComponent implements OnInit {
  postForm: FormGroup;
  editorStyle ={
    height: '300px'
  }
  config = {
    toolbar: [
      ['bold','underline','italic','strike'],
      ['code-block','blockquote'],
      ['link', 'image'],
      [{ 'header': [1, 2, 3, false] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ]
  }

  submitted: boolean = false;
  success: boolean = false;
  isAuth: boolean;
  categories: Array<any>;
  selectedCategory: Array<String> = [];
  categoryError: Boolean = true;
  id: String = '0';
  newPost;
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private _loginService: LoginService,
    private _postService: PostsService,
    private _route: Router,
    private _activeRoute: ActivatedRoute,
  ) { }
  submit() {
    this.submitted = true;
    if (this.postForm.invalid || this.categoryError) return;
    this.success = true;
    this.newPost = this.postForm.value;
    this.newPost.category = this.selectedCategory;
    if (this.id!=='0') {
      this._postService.update(this.id, this.newPost).subscribe(
        res => this._route.navigate(['read/' + res.update._id]),
        err => alert(err.message)
      )
    } else {
      this._postService.insert(this.newPost).subscribe(
        res => this._route.navigate(['read/' + res.success._id]),
        err => alert(err.message)
      );
    }
  }
  ngOnInit() {
    this._loginService.cast.subscribe(res => {
      this.isAuth = res;
    })
    if (this.isAuth) {
      this.categoryService.getCategory().subscribe(res => {
        this.categories = res.data;
        if (this.categories) {
          //form group.
          this._activeRoute.paramMap.subscribe(p => {
            this.id = p.get('id');
            if(this.id!=='0') this._getPost(this.id);
          })
            this.postForm = this.fb.group({
              title: ['', Validators.required],
              category: this.addCategory(null),
              content: ['', Validators.required],
              tags: [''],
              public: [false, Validators.required]
            })
        }
      })
    }
  }
  getSelectedCategory() {
    this.selectedCategory = [];
    this.category.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedCategory.push(this.categories[i]._id);
      }
    })
    this.categoryError = this.selectedCategory.length > 0 ? false : true;
  }
  get category() {
    return this.postForm.get('category') as FormArray;
  }
  addCategory(checkCategory) {
    const arr = this.categories.map(e => {
      if (checkCategory && checkCategory.indexOf(e._id) > -1) {
        return this.fb.control(true);
      } else {
        return this.fb.control(false);
      }
    })
    return this.fb.array(arr);
  }
  private _getPost(id: String) {
      this.categoryError = false;
      this._postService.detail(id).subscribe(
        result => {
          this.postForm = this.fb.group({
            title: result.title,
            category: this.addCategory(result.category),
            content: result.content,
            tags: result.tags,
            public: result.public
          })
        }
      )
  }

}
