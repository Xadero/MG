import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { DashboardContainerComponent } from './dashboard-container.component';
import { HeaderComponent } from './header/header.component';
import { MasterPageComponent } from './master-page/master-page.component';

@NgModule({
  declarations: [
    DashboardContainerComponent,
    HeaderComponent,
    MasterPageComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule
  ],
  exports:[ DashboardContainerComponent ]
})

export class DashboardModule { }
