import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HostPageComponent } from './host-page/host-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HostListComponent } from './host-list/host-list.component';
import { StorageService } from './Services/storage-service.service';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms';
import { HostViewEditComponent } from './host-view-edit/host-view-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HostPageComponent,
    HostListComponent,
    HostViewEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [StorageService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
