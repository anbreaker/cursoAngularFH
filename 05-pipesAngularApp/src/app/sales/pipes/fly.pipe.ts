import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyCustom',
})
export class FlyPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'fly' : 'no fly';
  }
}
