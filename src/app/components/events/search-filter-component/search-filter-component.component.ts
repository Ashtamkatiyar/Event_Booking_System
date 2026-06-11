import {
  Component,
  EventEmitter,
  Output,
  signal
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filter-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-filter-component.component.html',
  styleUrl: './search-filter-component.component.css'
})
export class SearchFilterComponentComponent {

  searchText = signal('');

selectedCategory = signal('');

  @Output()
  filterChanged = new EventEmitter<{
    searchText: string;
    category: string;
  }>();

  applyFilter() {

  this.filterChanged.emit({

    searchText:
      this.searchText(),

    category:
      this.selectedCategory()

  });

}
}