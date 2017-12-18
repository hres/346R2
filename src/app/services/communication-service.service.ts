import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class CommunicationServiceService {

private newSalesRecordAnnounced = new Subject<number>();
private newSalesRecordConfirmed = new Subject<number>();

createSalesAnnounced$ = this.newSalesRecordAnnounced.asObservable();
createSalesConfimed$ = this.newSalesRecordConfirmed.asObservable();

annonceCreate(recordId: number){
  console.log("dfkjjf", recordId);
this.newSalesRecordAnnounced.next(recordId);
}

confirmedCreate(creation: number){
this.newSalesRecordConfirmed.next(creation);
}


}
