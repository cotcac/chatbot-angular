import { Component, OnInit } from '@angular/core';
import { Observable, Subject  } from 'rxjs';
import { debounceTime  } from 'rxjs/operators';
@Component({
  selector: '[app-search-form]',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchSubject$ = new Subject<string>();
  constructor() { }
  ngOnInit() {
    this.searchSubject$
        .pipe(
           debounceTime(1000)
        )
        .subscribe(x =>console.log(x));
  }

  openSearch() {
    console.log('open search');
    document.getElementById("myOverlay").classList.remove("hidden");
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("mySearchInput").focus();

  }
  inputChanged($event){
    this.searchSubject$.next($event);
  }
  closeSearch() {
    setTimeout(function () {
      document.getElementById("myOverlay").style.display = "none";
    }, 200);

  }
  onSubmit() {
    console.log('submit');

  }

}
