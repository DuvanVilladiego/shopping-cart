import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFullItemDataComponent } from './list-full-item-data.component';

describe('ListFullItemDataComponent', () => {
  let component: ListFullItemDataComponent;
  let fixture: ComponentFixture<ListFullItemDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFullItemDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFullItemDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
