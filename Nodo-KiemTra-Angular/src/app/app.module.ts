import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from 'src/environments/environment';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {ToastrModule} from 'ngx-toastr';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {ColorPickerService} from 'ngx-color-picker';
import {httpInterceptorProviders} from './shared/helpers/http.interceptor';
import {HttpClientModule} from '@angular/common/http';
import {LessonOneComponent} from './pages/lesson-one/lesson-one.component';
import { SachFormComponent } from './pages/bai-tap/sach/sach-form/sach-form.component';
import { SachListComponent } from './pages/bai-tap/sach/sach-list/sach-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
    declarations: [
        AppComponent,
        LessonOneComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgbModule,
        FormsModule, ReactiveFormsModule,
        ToastrModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        SimpleNotificationsModule.forRoot(),
        HttpClientModule,
        SharedModule,
    ],
  providers: [ColorPickerService, httpInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
