import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from "@angular/material/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports: [MatButtonModule, MatNativeDateModule, 
              MatDatepickerModule, MatIconModule, 
              MatInputModule, MatFormFieldModule,
              MatCheckboxModule, MatSidenavModule,
              MatToolbarModule,MatListModule,MatTabsModule,
              MatCardModule, MatSelectModule,
              MatProgressSpinnerModule, MatDialogModule],
    exports: [MatButtonModule, MatNativeDateModule, 
              MatDatepickerModule, MatIconModule, 
              MatInputModule, MatFormFieldModule,
              MatCheckboxModule, MatSidenavModule,
              MatToolbarModule,MatListModule,MatTabsModule,
              MatCardModule, MatSelectModule,
              MatProgressSpinnerModule, MatDialogModule],
              
})

export class MaterialModule{}
