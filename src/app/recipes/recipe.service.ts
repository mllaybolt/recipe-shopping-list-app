import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Chicken Saltimbocca',
  //     'Italian for "jump in your mouth"',
  //     'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-210212-chicken-saltimboca-002-ab-1617903467.jpg',
  //     [
  //       new Ingredient('Chicken Cutlets', 8),
  //       new Ingredient('Proscuitto Slices', 16),
  //       new Ingredient('White Wine', 1),
  //       new Ingredient('Sage Leaves', 16),
  //       new Ingredient('Salt', 1),
  //       new Ingredient('Olive Oil', 3),
  //     ]
  //   ),
  //   new Recipe(
  //     'Lasagna Flatbread',
  //     'A simple meal with classic Italian flavour',
  //     'https://www.plainchicken.com/wp-content/uploads/2020/03/IMG_8231.JPG',
  //     [
  //       new Ingredient('Flatbread', 6),
  //       new Ingredient('Ricotta Cheese', 1),
  //       new Ingredient('Mozzarella Cheese', 1),
  //       new Ingredient('Parmesan Cheese', 1),
  //       new Ingredient('Egg', 1),
  //       new Ingredient('Sausage', 1),
  //       new Ingredient('Marinara Sauce', 1),
  //       new Ingredient('Italian Seasoning', 1),
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
