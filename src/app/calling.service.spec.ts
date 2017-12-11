import {inject, TestBed} from '@angular/core/testing';

import {CallingService} from './calling.service';
import {CalledService} from "./called.service";

describe('CallingService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CallingService, CalledService]
        });
    });

    it('should be created', inject([CallingService], (service: CallingService) => {
        expect(service).toBeTruthy();
    }));


    it('should return mocked value async', done => {
        inject([CallingService], (service: CallingService) => {
            spyOn(TestBed.get(CalledService), "calledMethod").and.callFake(() => Promise.resolve("mocked"));
            service.callingMethod().then((res) => {
                expect(res).toBe("mocked.passThrough");
                done();
            });
        })();   // <-- these braces are vital!!
    });


    it('should return mocked value sync', inject([CallingService], (service: CallingService) => {
            spyOn(TestBed.get(CalledService), "calledMethod").and.callFake(() => Promise.resolve("mocked"));
            service.callingMethod().then((res) => {
                expect(res).toBe("mocked.passThrough");
            });
        })
    );

    it('should return mocked value async without inject - WORKS', done => {
        const service = TestBed.get(CallingService);
        spyOn(TestBed.get(CalledService), "calledMethod").and.callFake(() => Promise.resolve("mocked"));
        service.callingMethod().then((res) => {
            expect(res).toBe("mocked.passThrough");
            done();
        });
    });
});
