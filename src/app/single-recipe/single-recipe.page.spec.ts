import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleRecipePage } from './single-recipe.page';

describe('SingleRecipePage', () => {
  let component: SingleRecipePage;
  let fixture: ComponentFixture<SingleRecipePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingleRecipePage);
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

