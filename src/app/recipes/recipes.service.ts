import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()

export class RecipeService {

    constructor(private slService: ShoppingListService) { }

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] =
        [
            new Recipe('Test Recipe', 'Test', 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F22%2F8000900-2000.jpg ', [
                new Ingredient('Meat', 1),
                new Ingredient('French fries', 1)
            ]),
            new Recipe('Another Test Recipe', 'Another Test', 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F07%2F22%2F8000900-2000.jpg ', [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
        ];

    getRecipes() {
        return this.recipes.slice();
    }

    AddIngredientsToSL(ingredients: Ingredient[]) {
        this.slService.AddIngredientsList(ingredients);
    }

}