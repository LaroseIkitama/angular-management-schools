import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

import { StyledButtonDirective } from "./directives/styled-button.directive";

@NgModule({
  declarations: [
    NavigationBarComponent,
    StyledButtonDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    MaterialModule,
    RouterModule,
    NavigationBarComponent,
    
    StyledButtonDirective
  ]
})
export class SharedModule {}
