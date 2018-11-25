import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { filter, map, catchError, tap, reduce } from 'rxjs/operators';
// import {DevExp} from 'devexp';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  whoAmIEndpoint = 'http://localhost:3000/whoAmI';
  trainingsEndpoint = 'http://localhost:3000/trainings';
  devExpsEndpoint = 'http://localhost:3000/devExps';
  otherExpsEndpoint = 'http://localhost:3000/otherExps';
  devSkillsEndpoint = 'http://localhost:3000/devSkills';
  otherSkillsEndpoint = 'http://localhost:3000/otherSkills';


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getWhoAmI(): Observable<any> {
    return this.http.get(this.whoAmIEndpoint).pipe(
      map(this.extractData)
    );
  }

  getTrainings(): Observable<any> {
    return this.http.get(this.trainingsEndpoint).pipe(
      map(this.extractData)
    );
  }

  getDevExps(): Observable<any> {
    return this.http.get(this.devExpsEndpoint).pipe(
      map(this.extractData)
    );
  }

  // getDevExpDetail(id: number): Observable<Devexp> {
  //   const devExpsList: Devexp[] = [this.http.get(this.otherExpsEndpoint).pipe(map(this.extractData))];
  //   var result = of(devExpsList.find(devExp => devExp.id === id));
  //   console.log(devExpsList);
  //   return result;
  // }

  getDevExpDetail(id: number): Observable<any> {
    // return this.http.get(this.devExpsEndpoint).pipe(map(devExp => devExp.id === id));
    return this.http.get(this.devExpsEndpoint).pipe(map((devExp) => {
      var result = []
      for (let d of devExp) {
        if (d.id === id) {
          result.push(d)
        }
      }
      console.log(result);
      return result
    }));
  }

  getOtherExps(): Observable<any> {
    return this.http.get(this.otherExpsEndpoint).pipe(
      map(this.extractData)
    );
  }

  getDevSkills(): Observable<any> {
    return this.http.get(this.devSkillsEndpoint).pipe(
      map(this.extractData)
    );
  }

  getOtherSkills(): Observable<any> {
    return this.http.get(this.otherSkillsEndpoint).pipe(
      map(this.extractData)
    );
  }

  // getProduct(id): Observable<any> {
  //   return this.http.get(endpoint + 'products/' + id).pipe(
  //     map(this.extractData));
  // }
  //
  // addProduct (product): Observable<any> {
  //   console.log(product);
  //   return this.http.post<any>(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(
  //     tap((product) => console.log(`added product w/ id=${product.id}`)),
  //     catchError(this.handleError<any>('addProduct'))
  //   );
  // }
  //
  // updateProduct (id, product): Observable<any> {
  //   return this.http.put(endpoint + 'products/' + id, JSON.stringify(product), httpOptions).pipe(
  //     tap(_ => console.log(`updated product id=${id}`)),
  //     catchError(this.handleError<any>('updateProduct'))
  //   );
  // }
  //
  // deleteProduct (id): Observable<any> {
  //   return this.http.delete<any>(endpoint + 'products/' + id, httpOptions).pipe(
  //     tap(_ => console.log(`deleted product id=${id}`)),
  //     catchError(this.handleError<any>('deleteProduct'))
  //   );
  // }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
