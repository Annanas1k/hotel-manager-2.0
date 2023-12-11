import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponent } from './booking.component';
import { AppModule } from '../app.module';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule] // Import the AppModule
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
