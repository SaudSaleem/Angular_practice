import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component'; 
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PostsComponent } from './posts/posts.component';

//import { RouterModule } from '@angular/router';
// import module

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    ContactFormComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ZippyComponent,
    ReactiveFormsComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   { path: '', component: AppComponent },
    //   { path: 'course', component: CourseComponent },
    //   { path: 'course/:coursename', component: CourseComponent },
    //   { path: 'contactForm', component: ContactFormComponent },
    // ]),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule
     
  ],
  providers: [CoursesService], //this contains all dependencies of all components of particular module
  bootstrap: [AppComponent],
})
export class AppModule {}
