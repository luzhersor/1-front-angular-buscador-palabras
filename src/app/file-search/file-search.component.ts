// file-search.component.ts
import { Component } from '@angular/core';
import { FileSearchService } from '../file-search.service';

@Component({
  selector: 'app-file-search',
  //template: `
  //  <button (click)="searchFiles()">Search Files</button>
  //`
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
  searchForm: any;

  searchFiles() {


      this.fileSearchService.searchFiles(this.searchData).subscribe(
        (result) => {
          console.log('Search result:', result);
          this.searchResults = result;
          // Handle the result as needed
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
}

