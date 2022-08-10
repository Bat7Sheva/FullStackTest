import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesByContractComponent } from './packages-by-contract.component';

describe('PackagesByContractComponent', () => {
  let component: PackagesByContractComponent;
  let fixture: ComponentFixture<PackagesByContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagesByContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesByContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
