import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-inventory-table',
  standalone: true,
  imports: [MatPaginator, MatPaginatorModule, MatSort, MatSortModule, MatTableModule, MatSlideToggleModule, MatIconModule],
  templateUrl: './inventory-table.component.html',
  styleUrl: './inventory-table.component.scss'
})
export class InventoryTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'category', 'isSell', 'actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))]
  const category = CATEGORIES[Math.round(Math.random() * (CATEGORIES.length - 1))]

  return {
    id: id.toString(),
    name: name,
    category: category,
    isSell: false,
  };

}

export interface UserData {
  id: string;
  name: string;
  category: string;
  isSell: boolean;
}

const NAMES: string[] = [
  '麵包',
  '司康',
  '焙查司康',
  '奶油司康'
];

const CATEGORIES: string[] = [
  '麵包',
  '司康',
  '吐司',
];
