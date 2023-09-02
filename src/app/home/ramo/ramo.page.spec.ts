import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RamoPage } from './ramo.page';

describe('RamoPage', () => {
  let component: RamoPage;
  let fixture: ComponentFixture<RamoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RamoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
