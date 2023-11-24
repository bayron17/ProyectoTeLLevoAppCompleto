import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment'; 
import { AngularFireModule } from '@angular/fire/compat';
import { StorageAutosService } from './storage-autos.service';
import { AngularDelegate } from '@ionic/angular';

describe('StorageAutosService', () => {
  let service: StorageAutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[AngularDelegate],
      imports:[
        AngularFireModule.initializeApp(environment.firebaseConfig)
      ]
    });
    service = TestBed.inject(StorageAutosService);
  });

   it('should be created', () => {
     expect(service).toBeTruthy();
   });
});
