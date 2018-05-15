import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { SheduleComponent } from './shedule/shedule.component';
import { ClassComponent } from './class/class.component';

// services
import { DashboardService } from './dashboard.service';


@NgModule({
  declarations: [
    AppComponent,
    SheduleComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
