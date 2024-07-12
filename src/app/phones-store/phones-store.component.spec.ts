import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesStoreComponent } from './phones-store.component';

describe('PhonesStoreComponent', () => {
  let component: PhonesStoreComponent;
  let fixture: ComponentFixture<PhonesStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonesStoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonesStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
