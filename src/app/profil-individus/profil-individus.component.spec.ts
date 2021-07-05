import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilIndividusComponent } from './profil-individus.component';

describe('ProfilIndividusComponent', () => {
  let component: ProfilIndividusComponent;
  let fixture: ComponentFixture<ProfilIndividusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilIndividusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilIndividusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
