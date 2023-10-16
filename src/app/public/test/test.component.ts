import { Component } from '@angular/core';
import { InvoiceDTO, InvoiceEntryDTO } from 'src/app/dto/invoice-dto';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  invoice: InvoiceDTO = new InvoiceDTO();

  addEntry() {
    this.invoice.entrys.push(new InvoiceEntryDTO())
  }
}
