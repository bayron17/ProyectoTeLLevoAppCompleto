import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisponibilidadPage } from './disponibilidad.page';
import { HelperService } from 'src/app/service/helper.service';
import { ModalController,AngularDelegate } from '@ionic/angular';

describe('DisponibilidadPage', () => {
  let component: DisponibilidadPage;
  let fixture: ComponentFixture<DisponibilidadPage>;
  let modal: ModalController;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations:[DisponibilidadPage],
      providers:[HelperService,ModalController,AngularDelegate]
    })
    fixture = TestBed.createComponent(DisponibilidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    modal = TestBed.inject(ModalController);
  }));

   it('should create', () => {
     expect(component).toBeTruthy();
   });
});
