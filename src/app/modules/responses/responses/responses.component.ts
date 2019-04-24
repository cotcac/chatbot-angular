import { Component, OnInit } from '@angular/core';
import { ResponsesService } from 'src/app/services/responses.service';


@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {
  responses = [];
  constructor(
    private _responseService: ResponsesService
  ) { }

  deleteResponse(id){
    console.log('emit:'+id);
    this._responseService.delete(id).subscribe(
      (result=>{
        this._getResponses();
      }),
      (err=>{
        console.log(err);
      })
    )
  }
  nextPageFn(page:number){
    console.log(page);
    this._getResponses(page);
  }
  //previous page
  ngOnInit() {
    this._getResponses();
  }
  private _getResponses (page?:number) {
    this._responseService.getList(page).subscribe(
      (res=>{
        console.log(res);

        this.responses = res;
        console.log(this.responses);
      }),
      (err=>{
        console.log(err);
      })
    )
  }
}
