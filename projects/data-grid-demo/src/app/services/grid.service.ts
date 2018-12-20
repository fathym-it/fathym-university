import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class GridService {

  constructor(private httpClient: HttpClient) {}

  public demoData(): Observable<any[]> {

   return this.httpClient.get<any[]>('./demoData.json')
   .pipe(
      map((res) => {
        return res;
      })
   );
  }
}
