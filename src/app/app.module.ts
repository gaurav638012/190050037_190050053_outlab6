import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact.component';
import { FormService } from './form.service';

@NgModule({
  imports:     
   [ BrowserModule, 
   FormsModule,
   ReactiveFormsModule,
   HttpClientModule,
   RouterModule.forRoot([
      { path: 'form', component: FormComponent },
      { path: '**', redirectTo:  "contact" },
      { path: 'contact', component: ContactComponent },
      
      
    ])
   ],

  declarations: [ AppComponent, HelloComponent, TopBarComponent, FormComponent, ContactComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FormService]
})
export class AppModule { }
