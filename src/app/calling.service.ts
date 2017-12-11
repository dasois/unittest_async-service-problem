import {Injectable} from '@angular/core';
import {CalledService} from "./called.service";

@Injectable()
export class CallingService {

    constructor(private calledSrv: CalledService) {
    }

    callingMethod() {
        return this.calledSrv.calledMethod().then((res) => {
            return res + ".passThrough";
        });
    }

}
