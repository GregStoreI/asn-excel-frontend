import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as XLSX from 'xlsx';

@Component({
  selector: 'excel-upload',
  imports: [],
  templateUrl: './excel-upload.component.html',
  styleUrl: './excel-upload.component.scss'
})
export class ExcelUploadComponent {

  constructor(private http: HttpClient) {}
  data: any[] = [];

  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      
      this.http.post('http://localhost:3000/api/data/upload', jsonData).subscribe(); 
    };
    
    reader.readAsArrayBuffer(file);
  }

  uploadData() {
    this.http.post('http://localhost:3000/excel/upload', this.data).subscribe(
      res => console.log('Data uploaded successfully', res),
      err => console.error('Error uploading data', err)
    );
  }
}
