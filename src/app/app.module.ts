import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {RecipesComponent} from './recipes/recipes.component';
import {RecipesListComponent} from './recipes/recipes-list/recipes-list.component';
import {RecipeDetailComponent} from './recipes/recipes-detail/recipes-detail.component';
import {RecipesItemComponent} from './recipes/recipes-list/recipes-item/recipes-item.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropDownDirective} from './shared/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecipesComponent,
        RecipesListComponent,
        RecipeDetailComponent,
        RecipesItemComponent,
        ShoppingListComponent,
        ShoppingEditComponent,
        DropDownDirective,
        RecipeStartComponent,
        RecipeEditComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
