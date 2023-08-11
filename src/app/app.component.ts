import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { HEROES } from './mock-heroes';

@Component({
  standalone: true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeroesComponent, CommonModule],
})
export class AppComponent implements OnInit {
  // user:string="Manyaa";
  // mobileno:string="9579232080";
  // age:number=18;
  // avatar:string="https://e0.pxfuel.com/wallpapers/61/978/desktop-wallpaper-cute-baby-cat-cute-cat-kitten-thumbnail.jpg"
  title = 'Tour of Heroes';

  // heroes = HEROES;

  constructor() {}

  ngOnInit() {}
}
