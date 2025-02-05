export namespace model {
	
	export class Transaction {
	    ID: string;
	    Category: string;
	    Amount: string;
	    Date: string;
	
	    static createFrom(source: any = {}) {
	        return new Transaction(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.ID = source["ID"];
	        this.Category = source["Category"];
	        this.Amount = source["Amount"];
	        this.Date = source["Date"];
	    }
	}

}

