import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloHellComponent } from './hello-hell.component';

describe('HelloHellComponent', () => {
  let component: HelloHellComponent;
  let fixture: ComponentFixture<HelloHellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloHellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloHellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
