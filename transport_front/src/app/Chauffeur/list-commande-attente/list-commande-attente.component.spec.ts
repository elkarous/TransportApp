import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommandeAttenteComponent } from './list-commande-attente.component';

describe('ListCommandeAttenteComponent', () => {
  let component: ListCommandeAttenteComponent;
  let fixture: ComponentFixture<ListCommandeAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCommandeAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommandeAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
