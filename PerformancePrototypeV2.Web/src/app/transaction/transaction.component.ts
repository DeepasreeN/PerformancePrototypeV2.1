import {Component} from "@angular/core";
import { TransactionService } from "./transaction.service";
import { Transaction } from "../models/transactions";
import { TableLazyLoadEvent } from "primeng/table";

@Component({
    selector:'app-transaction',
    templateUrl:'./transaction.component.html'
})

export class TransactionComponent{
    transactions: Transaction[] = [];
    totalRecords:number=0;
    rowsPerPageOptions:number[]=[5,10,15,20];
    loading:boolean=false;

    constructor( private transactionservice:TransactionService){
    }

    loadTransactions($event:TableLazyLoadEvent) { 
        this.loading=true;
        this.transactionservice.getTransactionsPerPage($event.rows|| 5,$event.first|| 0).subscribe({
            next:(response) => {
                this.transactions = response.data.transactiondetails;  
                this.totalRecords=response.data.totalcount;
                this.loading=false;        
            },
            error:(error) => {
            console.error('Error fetching transaction data', error);
            this.loading=false;
            }   
        })  
    } 
}