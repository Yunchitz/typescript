import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'my-footer',
    styles: [require('./footer.css')],
    template:require('./footer.html'),
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MyFooter {
    constructor(){ }
}




