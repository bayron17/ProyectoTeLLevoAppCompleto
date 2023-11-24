import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PerfilPage } from './perfil.page';
import { IonicModule } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

describe('PerfilPage', () => {
  let component: PerfilPage;
  let fixture: ComponentFixture<PerfilPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule
      ],
      providers: [AngularFireAuth]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

   it('should create', () => {
     expect(component).toBeTruthy();
   });
});
