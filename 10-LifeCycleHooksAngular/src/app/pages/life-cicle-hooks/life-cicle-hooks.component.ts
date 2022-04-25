import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-life-cicle-hooks',
  templateUrl: './life-cicle-hooks.component.html',
  styles: [],
})
export class LifeCicleHooksComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  name: string = 'anbreaker';
  seconds: number = 0;
  timerSubscription!: Subscription;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');

    this.timerSubscription.unsubscribe();
    console.log('ngOnDestroy timer!');
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    this.timerSubscription = interval(1000).subscribe((i) => {
      this.seconds = i;
    });
  }

  save() {
    // console.log('save');
  }
}
