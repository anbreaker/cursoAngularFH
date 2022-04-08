import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styles: [],
})
export class InputCountryComponent implements OnInit {
  @Input() placeholder: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  term: string = '';

  constructor() {}

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((value: string) => {
      this.onDebounce.emit(value);
    });
  }

  search() {
    this.onEnter.emit(this.term);
  }

  keyPress(event: any) {
    this.debouncer.next(this.term);
  }
}
