import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCustom',
})
export class CasePipe implements PipeTransform {
  transform(value: string, upOrLow: boolean = true): string {
    if (upOrLow) return value.toUpperCase();
    else return value.toLowerCase();
  }
}
