import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as XLSX from 'xlsx';
import { ExcelUploadComponent } from "./excel-upload/excel-upload.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExcelUploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'asn-excel-frontend';
 
}
