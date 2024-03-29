import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator'; // Tambahkan ini

@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  exports: [
    PeopleComponent
  ]
})
export class PeopleModule { }
