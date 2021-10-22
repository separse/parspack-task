import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { sl_SI } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import sl from '@angular/common/locales/sl';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LeafletMapComponent } from './components/leaflet-map/leaflet-map.component';

registerLocaleData(sl);

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    LeafletMapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NzTableModule,
    NzModalModule,
    NzButtonModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: sl_SI }],
  bootstrap: [AppComponent]
})
export class AppModule { }
