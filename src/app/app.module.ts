import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdChipsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { TagsComponent } from './tags/tags.component';

import { QuestionsService } from './questions/questions.service';
import { TagsService } from './tags/tags.service';

import { AppRoutingModule }     from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    TagsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdChipsModule
    ],
  providers: [QuestionsService, TagsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
