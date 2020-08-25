import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfsShowComponent } from './cfs-show.component';

describe('CfsShowComponent', () => {
  let component: CfsShowComponent;
  let fixture: ComponentFixture<CfsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
