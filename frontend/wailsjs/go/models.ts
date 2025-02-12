export namespace model {
	
	export class Transaction {
	    id: string;
	    type: string;
	    amount: string;
	    date: string;
	    description: string;
	
	    static createFrom(source: any = {}) {
	        return new Transaction(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.type = source["type"];
	        this.amount = source["amount"];
	        this.date = source["date"];
	        this.description = source["description"];
	    }
	}

}

