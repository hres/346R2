import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNftAsPreparedComponent } from './create-nft-as-prepared.component';

describe('CreateNftAsPreparedComponent', () => {
  let component: CreateNftAsPreparedComponent;
  let fixture: ComponentFixture<CreateNftAsPreparedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNftAsPreparedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNftAsPreparedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
