import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAndAboutComponent } from './contact-and-about.component';

describe('ContactAndAboutComponent', () => {
  let component: ContactAndAboutComponent;
  let fixture: ComponentFixture<ContactAndAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactAndAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAndAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
