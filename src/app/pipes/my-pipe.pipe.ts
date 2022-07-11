import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rskPipe',
  // pure: true
  pure: false
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.join(",");
  }

}
