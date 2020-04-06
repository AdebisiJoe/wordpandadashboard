import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomonymsComponent } from './homonyms.component';

describe('HomonymsComponent', () => {
  let component: HomonymsComponent;
  let fixture: ComponentFixture<HomonymsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomonymsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomonymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
