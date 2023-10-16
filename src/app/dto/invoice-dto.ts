
export class InvoiceDTO {
    invoiceDetail!: InvoiceDetail;
    entrys: Array<InvoiceEntryDTO>;

    constructor() {
        this.invoiceDetail = new InvoiceDetail();
        this.entrys = new Array<InvoiceEntryDTO>();
    }
}

export class InvoiceDetail {
    id?: number;
    vendorId?: number;
}

export class InvoiceEntryDTO {
    invoiceEntry!: InvoiceEntry;
    taxes!: Array<InvoiceEntryTax>;
    constructor() {
        this.invoiceEntry = new InvoiceEntry();
        this.taxes = new Array<InvoiceEntryTax>();
    }
}

export class InvoiceEntry {
    id?: number;
    invoiceId?: number;
    hsn?: string;
    rate?: number;
    amount?: number;
}

export class InvoiceEntryTax {
    id?: number;
    entryId?: number;
    taxId?: number;
}