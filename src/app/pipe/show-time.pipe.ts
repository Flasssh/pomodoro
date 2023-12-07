import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'showTime'
})
export class ShowTimePipe implements PipeTransform {

    transform(value: number): unknown {
        // seconds to timer format
        const minutes = Math.floor(value / 60);
        const seconds = value % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

}
