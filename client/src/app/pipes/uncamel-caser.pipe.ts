import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uncamelCaser'
})
export class UncamelCaserPipe implements PipeTransform {

  transform(value: string): string {
    let result = value.replace(/([A-Z])/g, ' $1'); // insert a space before all capital letters
    result = result.charAt(0).toUpperCase() + result.slice(1); // capitalize the first character of the string
    return result;
  }

}
