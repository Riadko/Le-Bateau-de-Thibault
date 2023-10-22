import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantsPage } from './restaurants.page';

describe('RestaurantsPage', () => {
  let component: RestaurantsPage;
  let fixture: ComponentFixture<RestaurantsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestaurantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}
