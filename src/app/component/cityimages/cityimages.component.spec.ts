import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityimagesComponent } from './cityimages.component';

describe('CityimagesComponent', () => {
  let component: CityimagesComponent;
  let fixture: ComponentFixture<CityimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
