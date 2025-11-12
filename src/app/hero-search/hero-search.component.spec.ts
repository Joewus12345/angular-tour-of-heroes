import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchComponent } from './hero-search.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSearchComponent],
      providers: [
        // Provide HttpClient and its testing backend
        provideHttpClient(),
        provideHttpClientTesting(),
        // Optionally stub HeroService so tests don’t hit real HTTP
        {
          provide: HeroService,
          useValue: {
            searchHeroes: () => of([]),
          },
        },
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
