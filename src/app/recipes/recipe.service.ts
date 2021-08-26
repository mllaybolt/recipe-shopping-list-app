import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2021/04/iStock-1250703747.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://dfbkuy5licyr9.cloudfront.net/wp-content/uploads/2021/04/iStock-1250703747.jpg'
    ),
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
