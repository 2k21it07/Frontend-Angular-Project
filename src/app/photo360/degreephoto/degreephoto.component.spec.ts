import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreephotoComponent } from './degreephoto.component';

describe('DegreephotoComponent', () => {
  let component: DegreephotoComponent;
  let fixture: ComponentFixture<DegreephotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DegreephotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegreephotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
