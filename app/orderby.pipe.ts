import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'orderby'
})

export class OrderByPipe implements PipeTransform {
    transform(array: Array<any>, sortedField: string): Array<any> {
        array.sort((a: any, b: any) => {
            if (a[sortedField] < b[sortedField]) {
                return -1;
            } else if (a[sortedField] > b[sortedField]) {
                return 1;
            } else {
                return 0;
            }
        });
        return array;
    }
}
