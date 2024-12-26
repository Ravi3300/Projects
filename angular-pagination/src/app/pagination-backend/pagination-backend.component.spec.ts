import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationBackendComponent } from './pagination-backend.component';

describe('PaginationBackendComponent', () => {
  let component: PaginationBackendComponent;
  let fixture: ComponentFixture<PaginationBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationBackendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
