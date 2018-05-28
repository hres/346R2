import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'
// import {RouterModule} from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { CreateNftAsPreparedComponent } from './create-nft-as-prepared.component';

describe('CreateNftAsPreparedComponent', () => {
  let component: CreateNftAsPreparedComponent;
  let fixture: ComponentFixture<CreateNftAsPreparedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNftAsPreparedComponent ],imports: [ReactiveFormsModule,FormsModule,MatProgressBarModule,ConfirmBoxModule],
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
