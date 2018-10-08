import { Pipe, PipeTransform } from "@angular/core";
import {DatePipe} from "@angular/common";

@Pipe({name:"lastSeen"})
export class LastSeenPipe implements PipeTransform{
    constructor(private datePipe: DatePipe){}
    transform(value?: number):any{

        if(!value) return "Never";

        return value === 0 || value == 175542 ?
            "Never" 
            : this.datePipe.transform(value * 1000, "yyyy-MM-dd HH:mm:ss Z");
    }
}