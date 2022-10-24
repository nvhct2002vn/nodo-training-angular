import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'hello'
})
export class HelloPipe implements PipeTransform {
    transform(name: any, ...args: any[]): any {
        return `Hello, surprise mtfk ${name} !!!`;
    }
}
