import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashChauffeurComponent } from './dash-chauffeur.component';

describe('DashChauffeurComponent', () => {
  let component: DashChauffeurComponent;
  let fixture: ComponentFixture<DashChauffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashChauffeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
