import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResponsesService } from 'src/app/services/responses.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-response-create',
  templateUrl: './response-create.component.html',
  styleUrls: ['./response-create.component.scss']
})
export class ResponseCreateComponent implements OnInit {
  responseForm: FormGroup;
  submitted: boolean = false;
  success: boolean = false;
  id: number = 0;

  constructor(
    private fb:FormBuilder,
    private _responseService: ResponsesService,
    private _router:Router,
    private _activaRouter: ActivatedRoute
  ) {
    this.responseForm = this.fb.group({
      name:['',Validators.required]
    })
  }
  onSubmit(){
    this.submitted = true;
    if(this.responseForm.invalid){
      return;
    }
    this.success = true;

    if(this.id!==0){
      // edit
      this._responseService
      .update(this.id,this.responseForm.value)
      .subscribe(
        (result=>{
          this.responseForm.reset();
          this._router.navigate(['/response/keyword/'+this.id])
        }),
        (err=>{
          console.log(err);
        })
      )
    }else{
      //insert
      this._responseService
      .insert(this.responseForm.value)
      .subscribe(
        (result=>{
          this.responseForm.reset();
          this._router.navigate(['/responses/keyword/'+result.id])
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

  }

  private _getResponse(id:number){
    if(id!==0){
      this._responseService.detail(id).subscribe(
        (result=>{
          this.responseForm.patchValue({name:result.name})
        }),
        (err=>{
          console.log(err);

        })
      )

    }
  }

  ngOnInit() {
    this._activaRouter.paramMap.subscribe(p=>{
      this.id=  parseInt(p.get('id'));
      this._getResponse(this.id);
    })
  }

}
