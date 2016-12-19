import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'my-header',
    styles: [`
        .my-header {
    position:absolute;
    height: 200px;
    top:0;
    left:0;
    right:0;
    background:#607D8B;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    font-family: Roboto, "Helvetica Neue", sans-serif;

}

.angular-span{
    position:absolute;
    font-size:26px;
    color:#fff;
    margin:30px;
    top:0;
    left:0;

}

.nav-ul{
    margin-left:20%;
    list-style:none;
    font-size:16px;
}

.nav-ul a{
    color:white;

}

.nav-li{
    float:left;
    margin-left:30px;
}
    `],
    template:require('./header.html'),
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class MyHeader {
    constructor(){ }
}




