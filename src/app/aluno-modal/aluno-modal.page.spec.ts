import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoModalPage } from './aluno-modal.page';

describe('AlunoModalPage', () => {
  let component: AlunoModalPage;
  let fixture: ComponentFixture<AlunoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
