import {Component} from '@angular/core';
import {CalledService} from "./called.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

    constructor(private calledService: CalledService) {
    }

    callingMethod() {
        return this.calledService.calledMethod().then(res => {
            return res + ".passThroughCmp";
        });
    }
}
