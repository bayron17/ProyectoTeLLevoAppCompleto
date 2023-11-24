import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController, AngularDelegate } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth,AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { LoginPage } from './login.page';
import { HelperService } from 'src/app/service/helper.service'; // Asegúrate de importar el HelperService desde la ruta correcta
import { environment } from 'src/environments/environment';   // Asegúrate de importar el environment desde la ruta correcta

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(() => {
    const activatedRouteStub = {
      snapshot: {
        params: {
          num2: 123,
        },
      },
      paramMap: new BehaviorSubject({}),
    };

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        HelperService,
        ModalController,
        AngularDelegate,
      ],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
      ],
    });

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
