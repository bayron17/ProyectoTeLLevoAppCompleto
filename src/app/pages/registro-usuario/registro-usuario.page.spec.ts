import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroUsuarioPage } from './registro-usuario.page';
import { IonicModule } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('RegistroUsuarioPage', () => {
  let component: RegistroUsuarioPage;
  let fixture: ComponentFixture<RegistroUsuarioPage>;
  let http: HttpClientTestingModule;

  beforeEach((() => { const activatedRouteStub = {
    snapshot: {
      params: {
        num2: 123456, 
      },
    },
    paramMap: new BehaviorSubject({}),
  };

    TestBed.configureTestingModule({
      declarations:[RegistroUsuarioPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        HttpClientTestingModule
      ],
      providers: [ { provide: ActivatedRoute, useValue: activatedRouteStub },],

    })
    fixture = TestBed.createComponent(RegistroUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    http = TestBed.inject(HttpClientTestingModule);

  }));

   it('should create', () => {
     expect(component).toBeTruthy();
   });
});
