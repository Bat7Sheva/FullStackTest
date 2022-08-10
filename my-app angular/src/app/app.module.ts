import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login/login-page.component';
import { CustomerComponent } from './customer/customer.component';
import { EditAddressComponent } from './customer/edit-address/edit-address.component';
import { PackagesByContractComponent } from './packages-by-contract/packages-by-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CustomerComponent,
    EditAddressComponent,
    PackagesByContractComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
