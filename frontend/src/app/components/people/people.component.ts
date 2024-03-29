import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: any[] = [];
  totalItems!: number; // Menandai properti sebagai opsional
  pageSize!: number; // Menandai properti sebagai opsional
  pageSizeOptions!: number[]; // Menandai properti sebagai opsional

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.totalItems = 0; // Inisialisasi properti di dalam constructor
    this.pageSize = 10; // Inisialisasi properti di dalam constructor
    this.pageSizeOptions = [5, 10, 25, 100]; // Inisialisasi properti di dalam constructor
    // Panggil layanan untuk mendapatkan data people
    this.peopleService.getPeople().subscribe(data => {
      this.totalItems = data.length;
      this.people = data;
    });
  }
}
