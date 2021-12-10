import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { FirstclsComponent } from './components/firstcls/firstcls.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import {FormsModule} from "@angular/forms";
import { PereComponent } from './components/pere/pere.component';
import { FilsComponent } from './components/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import {LoggerService} from "./services/logger.service";
import { TodoComponent } from './todo/todo/todo.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { EmbaucheComponent } from './cv/embauche/embauche.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    FirstclsComponent,
    ColorComponent,
    TwoComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    NgStyleComponent,
    HighlightDirective,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot(), // ToastrModule added
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
