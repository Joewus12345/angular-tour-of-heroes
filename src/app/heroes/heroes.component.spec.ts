import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesComponent],
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
    
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
