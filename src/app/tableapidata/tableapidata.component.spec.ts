import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableapidataComponent } from './tableapidata.component';

describe('TableapidataComponent', () => {
  let component: TableapidataComponent;
  let fixture: ComponentFixture<TableapidataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableapidataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableapidataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
