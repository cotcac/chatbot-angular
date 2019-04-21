import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { KeywordService } from 'src/app/services/keyword.service';
import { ResponsesService } from 'src/app/services/responses.service';

@Component({
  selector: 'app-insert-keyword',
  templateUrl: './insert-keyword.component.html',
  styleUrls: ['./insert-keyword.component.scss']
})
export class InsertKeywordComponent implements OnInit {
  keywordForm: FormGroup;
  response = null;
  submitted:boolean = false;
  success: boolean = false;
  response_id: number = null;
  constructor(
    private fb: FormBuilder,
    private _route: ActivatedRoute,
    private _keywordService: KeywordService,
    private _responseService: ResponsesService
  ) {

  }
  onSubmit(){
    this.submitted = true;
    if(this.keywordForm.invalid){
      console.log(this.keywordForm.value);
      return;
    }
    console.log(this.keywordForm.value);
    this._keywordService.create(this.keywordForm.value)
    .subscribe(
      (result=>{
        console.log(result);

        // this.response.keywords.push(this.keywordForm.value);
        this._getResponse(this.response_id);
        this.keywordForm.patchValue({name:''});
        this.submitted = false;
      }),
      (err=>{
        if(err.error && err.error.message){
          alert(err.error.message)
        }else{
          alert('Server error!')
        }
      })
    )
  }
  private _getResponse(id){
    this._responseService.detail(id)
    .subscribe(
      (result=>{
        console.log(result);
        this.response = result;
      }),
      (err=>{
        console.log(err);
      })
    )
  }
  delete(id){
    console.log(id);
    this._keywordService.delete(id).subscribe(
      (result=>{
        this._getResponse(this.response_id);
      }),
      (err=>{
        alert('Server error');
      })
    )
  }
  ngOnInit() {
    this._route.paramMap.subscribe(
      (result=>{
        const id = parseInt(result.get('id'));
        this.response_id = id;
        // get response data.
        this._getResponse(id);

        // form data.
        this.keywordForm = this.fb.group({
          name:['', Validators.required],
          response_id:[id, Validators.required]
        })
      }),
      (err=>{
        console.log(err);
      })
    )
  }
}
