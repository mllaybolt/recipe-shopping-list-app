import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test', 'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2021/04/iStock-1250703747.jpg'),
  new Recipe('A Test Recipe', 'This is simply a test', 'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2021/04/iStock-1250703747.jpg'),
]
  constructor() { }

  ngOnInit(): void {
  }

}
