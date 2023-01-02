import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductServiceTsComponent } from './producttt.service.ts.component';

describe('ProductServiceTsComponent', () => {
  let component: ProductServiceTsComponent;
  let fixture: ComponentFixture<ProductServiceTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductServiceTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductServiceTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
