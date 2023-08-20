import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
  
    private recipes: Recipe[] = [
        new Recipe(
          'Schnitzel',
          'This is simply a test',
          'https://media.istockphoto.com/id/603258520/photo/schnitzel-and-fried-potatoes.jpg?s=2048x2048&w=is&k=20&c=PNJrHyiCF16b_L3g_eeIjI6ULowqi8nd0vQNjm5_Q-o=',
          [
            new Ingredient('Meat',1),
            new Ingredient('French Fries', 20),
          ]
        ),
        new Recipe(
          'Burger',
          'This is simply a test',
          'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg',[
            new Ingredient('Bun',2),
            new Ingredient('Meat', 1),
          ]
        ),
      ]
      constructor(private slService: ShoppingListService) {
      
      }
      getRecipes(){
        return [...this.recipes];
      }

      getRecipe(id: number) {
        return this.recipes[id];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}