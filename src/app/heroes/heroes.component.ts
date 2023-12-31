import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HEROES } from '../mock-heroes';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [CommonModule, FormsModule],
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Prakash',
  // };
   heroes=HEROES;
   selectedHero?:Hero;
  // @Input() hero!: Hero;
  // even: boolean=false;

  constructor() {}
  //  geteven(){
  //   return this.hero.id%2 !=0;
  //  }  
  onselect(hero:Hero){
    this.selectedHero=hero;
  }
  ngOnInit() {}
}
