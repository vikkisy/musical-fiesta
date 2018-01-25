import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule, MatMenuModule, MatFab, MatIconModule, MatDialogModule } from '@angular/material';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { DiscussionComponent } from './discussion/discussion.component';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    MyDialogComponent,
    DiscussionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
  
  ],
  entryComponents: [
    MyDialogComponent,
    DiscussionComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
