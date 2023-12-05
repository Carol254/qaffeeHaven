import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector:'[carouselItem]'
})

export class carouselItemDirective{
    constructor(public tpl:TemplateRef<any>){}
}