// file-search.component.ts
import { Component } from '@angular/core';
import { FileSearchService } from '../file-search.service';

@Component({
  selector: 'app-file-search',
  templateUrl: './file-search.component.html'
})
export class FileSearchComponent {

  constructor(private fileSearchService: FileSearchService) {}

  searchData = {
    dir: '',
    filter: '',
    //ext: ''
  };

  searchResults: any[] = [];
  totalFiles: number = 0;
  totalOccurrences: number = 0;
  extensionCounts: any;
  highlightedRow: any;
  //searchForm: any; era para el required, pero resetea angular material

  searchFiles() {

      this.fileSearchService.searchFiles(this.searchData).subscribe(
        (result) => {
          console.log('Search result:', result);
          this.searchResults = result.result;
          this.totalFiles = result.totalFiles;
          this.totalOccurrences = result.totalOccurrences;
          this.highlightedRow = result.highlightedRow;
        },
        (error) => {
          console.error('Error:', error);
          // Handle errors
        }
      );

  }

  getFileUrl(filePath: string): string{
    return `http://localhost:3000/static/${filePath}`;
  }

  // Función para resaltar el filtro en la fila
  highlightFilter(row: string, filter: string): string {
    return row.replace(new RegExp(filter, 'gi'), match => `<span class="highlight">${match}</span>`);
  }
}

