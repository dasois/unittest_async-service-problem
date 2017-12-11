import {Injectable} from '@angular/core';

@Injectable()
export class CalledService {

  constructor() { }

    calledMethod() {
        return Promise.resolve("not mocked");
    }

}
