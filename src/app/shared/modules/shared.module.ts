import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Configuration } from '../configuration/configuration';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    AngularFontAwesomeModule
  ]
})

export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        Configuration
      ]
    };
  }
}
