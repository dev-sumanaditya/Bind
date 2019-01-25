import { Injectable } from '@angular/core';
import { Observable , Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private subject = new Subject<any>();

  openModal(data: any) {
    this.subject.next({data: data});
  }

  getData(): Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }


}
