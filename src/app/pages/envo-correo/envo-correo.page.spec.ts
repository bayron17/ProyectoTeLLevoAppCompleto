import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvoCorreoPage } from './envo-correo.page';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


describe('EnvoCorreoPage', () => {
  let component: EnvoCorreoPage;
  let fixture: ComponentFixture<EnvoCorreoPage>;

  beforeEach((() => {

    const activatedRouteStub = {
      snapshot: {
        params: {
          num4: 123,  // proporciona un valor simulado para 'calificacion'
        },
      },
      paramMap: new BehaviorSubject({}),
    };
    
    TestBed.configureTestingModule({
      declarations:[EnvoCorreoPage],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ]
    })
    fixture = TestBed.createComponent(EnvoCorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

   it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
