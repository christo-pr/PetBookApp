import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from './app.routing';
import { PageService } from './services/page.service';

import { SelectDateComponent } from "./views/modals/select-date/select-date.component";
import { SelectGenderComponent } from "./views/modals/select-gender/select-gender.component";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    SelectDateComponent,
    SelectGenderComponent,
    ...navigatableComponents
  ],
  entryComponents: [
    SelectDateComponent,
    SelectGenderComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  providers: [ PageService ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
