import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Message } from './message';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MessageService {

	constructor (private http: Http) {}

	private messagesUrl = 'http://localhost/messages.json';

	getAllMessages():void{// Observable<Message[]>{
		// console.log( this.http.get(this.messagesUrl).map((res:Response) => res.json()) );//.catch((error:any) => Observable.throw(error.json().error || 'Server Error'));

		// console.log(data);
		// return data;
	}
}