import { TestBed } from '@angular/core/testing';
import { LocacionService } from './locacion.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularDelegate } from '@ionic/angular';


describe('LocacionService', () => {
  let service: LocacionService;
  let http: HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[LocacionService,AngularDelegate],
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(LocacionService);
    http = TestBed.inject(HttpClientTestingModule);
  });

   it('should be created', () => {
     expect(service).toBeTruthy();
   });
});
