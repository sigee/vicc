import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

describe('AppComponent', () => {
  let fakeDataService: any;
  let fakeAuthService: any;
  let component: AppComponent;

  beforeEach(() => {
    fakeDataService = jasmine.createSpyObj(fakeDataService, ['getCategories']);
    fakeDataService.getCategories.and.returnValue(Observable.of({data: ['FAKE_CATEGORY']}));

    fakeAuthService = jasmine.createSpyObj(fakeAuthService, ['login', 'logout', 'loggedIn']);

    component = new AppComponent(fakeAuthService, fakeDataService);
  });

  it('should create', () => {
    expect(component).toBeDefined('Whoopie!');
  });

  it('should set categories property when initialised', () => {
    component.ngOnInit();
    expect(component.categories).toEqual(['FAKE_CATEGORY']);
  });
});
