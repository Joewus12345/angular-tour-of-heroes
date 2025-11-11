import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { CommonModule, NgFor } from '@angular/common';
import { AppRoutingModule } from "../app-routing.module";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, NgFor, AppRoutingModule],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {  
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
}
