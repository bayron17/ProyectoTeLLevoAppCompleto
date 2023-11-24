
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MenuPage } from './menu.page';
import { IonicModule } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

describe('MenuPage', () => {
  let component: MenuPage;
  let fixture: ComponentFixture<MenuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule
      ],
      providers: [AngularFireAuth]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('deberia cerrar la sección del usuario(el token queda desactivado) direccionandolo al login', () => {
    spyOn(component, 'logOut');
    const logoutIcon = fixture.nativeElement.querySelector('#iconoLogOut');
    logoutIcon.click();
    expect(component.logOut).toHaveBeenCalled();
  });
});
