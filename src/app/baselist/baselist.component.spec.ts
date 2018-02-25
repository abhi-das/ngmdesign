import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselistComponent } from './baselist.component';

describe('BaselistComponent', () => {
  let component: BaselistComponent;
  let fixture: ComponentFixture<BaselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
