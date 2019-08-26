import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-lazy-child',
    templateUrl: './lazy-child.component.html',
    styleUrls: ['./lazy-child.component.css']
})
export class LazyChildComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
        console.log(989807897897)
    }

    showLisa() {
        this.router.navigate(['/lazy-child/homer', {outlets: {major: ['lisa']}}])
    }

}
