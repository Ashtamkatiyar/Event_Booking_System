import {
  Component,
  EventEmitter,
  Input,
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

  @Input()
  totalEvents = 0;

  searchText = signal('');

  selectedCategory = signal('');

  @Output()
  filterChanged = new EventEmitter<{
    searchText: string;
    category: string;
  }>();

  private emitFilter() {

    this.filterChanged.emit({
      searchText: this.searchText(),
      category: this.selectedCategory()
    });

  }

  onSearchChange(value: string) {

    this.searchText.set(value);

    this.emitFilter();
  }

  onCategoryChange(value: string) {

    this.selectedCategory.set(value);

    this.emitFilter();
  }

  clearFilters() {

    this.searchText.set('');
    this.selectedCategory.set('');

    this.emitFilter();
  }

  selectQuickCategory(category: string) {

    this.selectedCategory.set(category);

    this.emitFilter();
  }
}