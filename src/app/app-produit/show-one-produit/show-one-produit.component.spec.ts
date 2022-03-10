import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneProduitComponent } from './show-one-produit.component';

describe('ShowOneProduitComponent', () => {
  let component: ShowOneProduitComponent;
  let fixture: ComponentFixture<ShowOneProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOneProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
