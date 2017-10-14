import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {
  MaterialModule,
  MdToolbarModule,
  MdButtonModule,
  MdCheckboxModule,
  MdAutocompleteModule,
  MdCardModule,
  MdDialogModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdRadioModule,
  MdSnackBarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatTabsModule,
    RouterModule.forRoot([
      {
        path: 'post',
        component: PostComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
