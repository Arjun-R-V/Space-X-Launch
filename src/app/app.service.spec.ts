import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed, inject } from '@angular/core/testing';
import { AppService } from './app.service';

describe('App service ', () => {
    let httpTestingController: HttpTestingController;

    beforeEach(()=> {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                AppService
            ]
        });
        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('should test getLaunchData', inject([AppService], (appService: AppService) => {
        const filterData = {};
        spyOn(appService, 'getLaunchData').and.callThrough();
        appService.getLaunchData(filterData);
        expect(appService.getLaunchData).toHaveBeenCalled();
    }));
});