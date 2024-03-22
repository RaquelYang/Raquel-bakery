import { AfterViewInit, Component, Input, ViewChild, OnInit } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { UserData } from '../inventory-management.model';

@Component({
  selector: 'app-inventory-table',
  standalone: true,
  imports: [MatPaginator, MatPaginatorModule, MatSort, MatSortModule, MatTableModule, MatSlideToggleModule, MatIconModule],
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.scss'
})
export class InventoryTableComponent implements AfterViewInit, OnInit {
  @Input() items: UserData[] = [];

  displayedColumns: string[] = ['id', 'name', 'category', 'isSell', 'actions'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.items);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
