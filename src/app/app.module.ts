import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
