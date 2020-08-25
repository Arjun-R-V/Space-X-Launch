import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppService } from './app.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        AppComponent
      ],
      providers: [
        AppService
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app component', () => {
   expect(component).toBeTruthy();
  });

  it('should call onLaunchYear and set launch year value in filter data', () => {
    component.onLaunchYear('2006');
    expect(component.filterData.launchYear).toBe('2006');
  });

  it('should call onSuccessfulLaunch and set successful launch state in filter data', () => {
    component.onSuccessfulLaunch('true');
    expect(component.filterData.successfulLaunchState).toBe('true');
  });

  it('should call onSuccessfulLand and set successful launch state value in filter data', () => {
    component.onSuccessfulLand('false');
    expect(component.filterData.successfulLandState).toBe('false');
  });
});
