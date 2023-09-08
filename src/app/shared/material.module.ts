import { NgModule } from "@angular/core";

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatMenuModule } from '@angular/material/menu';

import { MatIconModule } from '@angular/material/icon';

import { MatDividerModule } from "@angular/material/divider";

import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';

import { MatButtonModule } from '@angular/material/button';

import { MatInputModule } from '@angular/material/input';

import { MatBadgeModule } from '@angular/material/badge';

import { MatCardModule } from '@angular/material/card';

import { MatTableModule } from '@angular/material/table';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatPaginatorModule } from '@angular/material/paginator';

import { MatSortModule } from '@angular/material/sort';

import { MatDialogModule } from '@angular/material/dialog';

import { MatSelectModule } from '@angular/material/select';

import { MatStepperModule } from '@angular/material/stepper';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatNativeDateModule } from '@angular/material/core';

import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatChipsModule } from '@angular/material/chips';

import {MatTabsModule} from '@angular/material/tabs';


@NgModule({

  exports: [
    MatSidenavModule,

    MatToolbarModule,

    MatMenuModule,

    MatIconModule,

    MatDividerModule,

    MatListModule,

    MatGridListModule,

    MatButtonModule,

    MatInputModule,

    MatBadgeModule,

    MatCardModule,

    MatTableModule,

    MatFormFieldModule,

    MatPaginatorModule,

    MatSortModule,

    MatDialogModule,

    MatSelectModule,

    MatStepperModule,

    FormsModule,

    ReactiveFormsModule,

    MatNativeDateModule,

    MatDatepickerModule,

    MatChipsModule,

    MatTabsModule,


  ]

})
export class MaterialModule {

}
