import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormTableComponent } from './form-table/form-table.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'table',
    component: FormTableComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/table'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
