import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-response-item]',
  templateUrl: './response-item.component.html',
  styleUrls: ['./response-item.component.scss']
})
export class ResponseItemComponent implements OnInit {
  @Input() response;
  @Output() deleteResponse:EventEmitter<any>= new EventEmitter();
  constructor() { }

  delete(id){
    console.log(id);
    this.deleteResponse.emit(id);

  }

  ngOnInit() {
  }

}
