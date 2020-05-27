import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatwinComponent } from './chatwin.component';

describe('ChatwinComponent', () => {
  let component: ChatwinComponent;
  let fixture: ComponentFixture<ChatwinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatwinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
