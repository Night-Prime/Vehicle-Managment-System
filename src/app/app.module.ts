import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgChartsModule } from 'ng2-charts';
import { DataTablesModule } from "angular-datatables";
import {MatDialogModule} from '@angular/material/dialog';
import { NgToastModule } from 'ng-angular-popup';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/admin/home/home.component';
import { NavbarComponent } from './components/admin/navbar/navbar.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { SpinnerComponent } from './animations/spinner/spinner.component';
import { LoadingService } from './shared/services/loading.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    PagenotfoundComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgChartsModule,
    DataTablesModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgToastModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
