import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn:'root',
})
export class SelectionDataService{
    private messageSource = new BehaviorSubject("def");
    currentMessage = this.messageSource.asObservable();
    constructor(){

    }
    changeMessage(message:string){
        this.messageSource.next(message);
    }
}