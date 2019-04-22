import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chatForm:FormGroup;
  submmitted:boolean = false;
  success:boolean = false;
  messages=[];
  constructor(
    private fb: FormBuilder,
    private _search:SearchService
  ) {
    this.chatForm = this.fb.group({
      keyword:['', Validators.required]
    })
  }

  onSubmit(){
    console.log('submit');
    this.submmitted = true;
    if(this.chatForm.invalid){
      return;
    }
    console.log(this.chatForm.value);
    this.success = true;
    this.messages.push({name: 'You' , text:this.chatForm.value.keyword});
    // robot answer.
    this._search.search(this.chatForm.value.keyword).subscribe(
      (result=>{
        if(result.local){
          this.messages.push({
            name:'Robot',
            text:result.data.name
          })
        }else{
          if(result.data.webPages && result.data.webPages.value[0].snippet){
            this.messages.push({
              name:'Internet result',
              text:result.data.webPages.value[0].snippet,
              link:result.data.webPages.value[0].url
            })
          }else{
            this.messages.push({
              name:'Robot',
              text:'Oop cant find any result for that!!!'
            })
          }
        }
      }),
      (err=>{
        console.log(err);
      })
    )
    this.chatForm.patchValue({keyword:''});
    // end robot answer.
    console.log(this.messages);
  }
  ngOnInit() {
  }

}
