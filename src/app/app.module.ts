import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabUser } from './lab-user';
import { RackEnterComponent } from './rack-enter/rack-enter.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CellData } from './CellData';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RackSample } from './rack-sample';
import { RackServiceService } from './rack-service.service';

@NgModule({
  declarations: [
    AppComponent,
    RackEnterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    BrowserAnimationsModule,
    HttpClientModule
    


    
  ],
  providers: [LabUser,CellData,RackSample],
  bootstrap: [AppComponent]
})
export class AppModule { }
