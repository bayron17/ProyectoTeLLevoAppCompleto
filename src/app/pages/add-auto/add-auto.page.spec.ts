import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAutoPage } from './add-auto.page';
import { HelperService } from 'src/app/service/helper.service';
import { ModalController,AngularDelegate } from '@ionic/angular';

describe('AddAutoPage', () => {
  let component: AddAutoPage;
  let fixture: ComponentFixture<AddAutoPage>;
  let modal: ModalController;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations:[AddAutoPage],
      providers:[HelperService,ModalController,AngularDelegate]
    })
    fixture = TestBed.createComponent(AddAutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    modal = TestBed.inject(ModalController);

  }));

   it('should create', () => {
     expect(component).toBeTruthy();
   });
});
