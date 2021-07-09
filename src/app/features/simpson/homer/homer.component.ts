import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-homer',
    templateUrl: './homer.component.html',
    styleUrls: ['./homer.component.css']
})
export class HomerComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit() {
        console.log(989807897897)
    }

    showLisa() {
        this.router.navigate(['/homer/homer', {outlets: {major: ['lisa']}}])
    }

}
