import {NgModule} from "@angular/core";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipesComponent} from "./recipes.component";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {RecipeDetailComponent} from "./recipes-detail/recipes-detail.component";
import {RecipesItemComponent} from "./recipes-list/recipes-item/recipes-item.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RecipesRoutingModule} from "./recipes-routing.module";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    RecipesItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule {
}
