import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        // Provide HttpClient and its testing backend
        provideHttpClient(),
        provideHttpClientTesting(),
        // Optionally stub HeroService so tests don’t hit real HTTP
        {
          provide: HeroService,
          useValue: {
            // Return an observable with some dummy heroes
            getHeroes: () => of([{ id: 1, name: 'Test Hero 1' }, { id: 2, name: 'Test Hero 2' }]),
          },
        },
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
