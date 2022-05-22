import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChaffeurComponent } from './list-chaffeur.component';

describe('ListChaffeurComponent', () => {
  let component: ListChaffeurComponent;
  let fixture: ComponentFixture<ListChaffeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChaffeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChaffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
