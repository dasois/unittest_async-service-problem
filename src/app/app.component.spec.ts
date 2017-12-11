import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CallingService} from "./calling.service";
import {CalledService} from "./called.service";

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [
                CalledService,
                CallingService
            ]
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));

    it('should return mocked value async - DOES WORK', done => {
        const fixture = TestBed.createComponent(AppComponent);
        const cmp = fixture.debugElement.componentInstance;
        spyOn(TestBed.get(CalledService), "calledMethod").and.callFake(() => Promise.resolve("mocked"));
        cmp.callingMethod().then((res) => {
            expect(res).toBe("mocked.passThroughCmp");
            done();
        });
    });
});
