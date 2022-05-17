import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]',
})
export class ErrorMsgDirective implements OnInit {
  private _color: string = 'red';
  private _message: string = 'Is required';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(value: string) {
    this.htmlElement.nativeElement.style.color = value;
  }

  @Input() set msg(valor: string) {
    this._message = valor;

    this.setMessage();
  }

  @Input() set valid(value: boolean) {
    if (value) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();

    this.setStyles();

    this.setMessage();
  }

  setStyles(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._message;
  }
}
