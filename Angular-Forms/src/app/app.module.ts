import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserService } from './service/userService';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HighlightDirective } from './directive/highlight-directive';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    ReactiveFormComponent,
    ListUserComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
