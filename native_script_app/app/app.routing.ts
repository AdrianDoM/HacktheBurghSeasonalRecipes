import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { BrowseRecipesComponent } from "./browserecipes/browse_recipes.component";
import { FootprintComponent } from "./footprint/footprint.component";
import { SettingsComponent } from "./settings/settings.component";
import { WebComponent } from "./web/web.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
  { path: "recipe", component: RecipeComponent },
  { path: "browserecipes", component: BrowseRecipesComponent },
  { path: "footprint", component: FootprintComponent },
  { path: "settings", component: SettingsComponent },
  { path: "web", component: WebComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  RecipeComponent,
  BrowseRecipesComponent,
  FootprintComponent,
  SettingsComponent,
  WebComponent
];