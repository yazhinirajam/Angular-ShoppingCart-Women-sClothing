import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule if needed
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule if needed

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { WomensShoppingComponent } from './womens-shopping/womens-shopping.component'; // Import WomensShoppingComponent

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    WomensShoppingComponent // Add WomensShoppingComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule, // Include if you use ngModel or ngForm
    ReactiveFormsModule, // Include if you use reactive forms
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
