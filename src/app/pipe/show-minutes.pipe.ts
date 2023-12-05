import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showMinutes'
})
export class ShowMinutesPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const minutes = Math.floor(value / 60);
    return `${minutes}`;
  }

}
