import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideodegreeComponent } from './videodegree.component';

describe('VideodegreeComponent', () => {
  let component: VideodegreeComponent;
  let fixture: ComponentFixture<VideodegreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideodegreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideodegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
