import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbacks: [];
  constructor(
    private feedbackService: FeedbackService
  ) { }
  nextPageFn(page:number){
    this._getResponses(page);
  }
  delete(id){
    console.log(id);
    if(confirm("are you sure?")){
      // this.deleteResponse.emit(id);
      console.log(id);
      this.feedbackService.delete(id).subscribe(
        (result=>{
          this._getResponses();
        }),
        (err=>{
          console.log(err);
          alert('Error')
        })
      )
    }
  }

  private _getResponses (page?:number) {
    this.feedbackService.getList(page).subscribe(
      (res=>{
        this.feedbacks = res;
      }),
      (err=>{
        alert('Error')
      })
    )
  }
  ngOnInit() {
    this._getResponses();
  }

}
