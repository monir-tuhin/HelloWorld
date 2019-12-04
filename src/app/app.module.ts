import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrentChallengeComponent } from "./challenges/current-challenge/current-challenge.component";
import { StackComponent } from './layouts/stack/stack.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule, NativeScriptFormsModule, BrowserAnimationsModule, HttpClientModule,
    ],
    declarations: [
        AppComponent,
        CurrentChallengeComponent,
        StackComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
