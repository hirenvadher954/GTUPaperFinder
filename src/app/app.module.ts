import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PaperFormComponent} from './paper/paper-form/paper-form.component';
import {PaperListComponent} from './paper/paper-list/paper-list.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './paper/shared/footer/footer.component';

const routes: Routes = [
  {path: '', component: PaperFormComponent},
  {path: 'paper/:branchName/:subjectCode', component: PaperListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PaperFormComponent,
    PaperListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
