import { ViccDetailComponent } from './vicc-detail.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { DataServiceService } from '../dataservice.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { FieldsetModule } from 'primeng/primeng';
import { ShareButtonsModule } from 'ng2-sharebuttons';
import { ActivatedRoute } from '@angular/router';
import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@nglibs/meta';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: 'ViccApp',
    defaults: {
      title: 'Viccek',
      description: 'A legjobb napi vicc, humor kiszolgáló',
      'og:image': 'https://viccek.herokuapp.com/assets/banana.png',
      'og:type': 'website',
      'og:locale': 'hu-HU'
    }
  });
}
describe('ViccDetailComponent', () => {
    let fixture: ComponentFixture<ViccDetailComponent>;
    let component: ViccDetailComponent;
    let debugElement: DebugElement;
    let dataServiceService: DataServiceService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                FieldsetModule,
                BrowserAnimationsModule,
                ShareButtonsModule.forRoot(),
                MetaModule.forRoot({
                    provide: MetaLoader,
                    useFactory: (metaFactory)
                })
            ],
            declarations: [ViccDetailComponent],
            providers: [
                DataServiceService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: Observable.of({id: 'abc123'})
                    }
                }
            ]
        });
        fixture = TestBed.createComponent(ViccDetailComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        dataServiceService = TestBed.get(DataServiceService);
    });

    it('should creat', () => {
        expect(component).toBeDefined();
    });

    it('should put joke into html page', () => {
        spyOn(dataServiceService, 'getJoke').and.returnValue(Observable.of({data: [{cim: 'Vicc 01', tartalom: 'Description'}]}));

        fixture.detectChanges();

        let element = debugElement.query(By.css('p-header')).nativeElement;
        expect(element.textContent).toEqual('Vicc 01');

        element = debugElement.query(By.css('.ui-fieldset-content')).nativeElement;
        expect(element.textContent.trim()).toEqual('Description');
    });
});
