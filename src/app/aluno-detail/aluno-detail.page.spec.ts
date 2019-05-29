import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoDetailPage } from './aluno-detail.page';

describe('AlunoDetailPage', () => {
  let component: AlunoDetailPage;
  let fixture: ComponentFixture<AlunoDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
