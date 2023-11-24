import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarPasswordPage } from './recuperar-password.page';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

describe('RecuperarPasswordPage', () => {
  let component: RecuperarPasswordPage;
  let fixture: ComponentFixture<RecuperarPasswordPage>;

  beforeEach((() => { const activatedRouteStub = {
    snapshot: {
      params: {
        num3: 123456, 
      },
    },
    paramMap: new BehaviorSubject({}),
  };
  
  TestBed.configureTestingModule({
    declarations:[RecuperarPasswordPage],
    providers: [ { provide: ActivatedRoute, useValue: activatedRouteStub },],
    imports: [
      IonicModule.forRoot(),
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule
    ]
  })
    fixture = TestBed.createComponent(RecuperarPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

   it('should create', () => {
     expect(component).toBeTruthy();
   });
});
