import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[loadImg]'
})
export class LoadImgDirective {
    @Input() loadImg: string;
    constructor(e: ElementRef) {
        console.log(e.nativeElement)
    }
}