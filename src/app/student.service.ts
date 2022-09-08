import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';



// TODO: in the future, this will get data from the database,
// instead of fake data from here
@Injectable({
  providedIn: 'root'
})

export class StudentService {

  // the web api expects special header in http save requests. this might be different in spring boot api
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json'})};

  // this will be changed to work with database
  private studentsURL = 'http://localhost:8080/api/students'; // this is URL to web api
  private addStudentURL = 'http://localhost:8080/api/student';
  private getStudentURL = 'http://localhost:8080/api/id';
  private deleteURL = 'http://localhost:8080/api/id/delete';
  private updateStudentURL = 'http://localhost:8080/api/update'

  constructor(private http: HttpClient, private messageService: MessageService) { }

  // log a StudentService message with the MessageService
  private log(message: string) {
    this.messageService.add(`StudentService: ${message}`);
  }

  /* http.get returns an untyped JSON object. Some APIs bury the data is an object.
   The data will have to be 'dug out' using RxJS map() operator. */
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsURL)
    .pipe(
      tap(_ => this.log('fetched students')),
      catchError(this.handleError<Student[]>('getStudents', [])));
  }

  // this can be rewritten to make http request without changing StudentDetailComponent
  getStudent(id: number): Observable<Student> {
    //const url = `${this.getStudentURL}/${id}`;
    const params = new HttpParams().append('studentID', id);
    return this.http.get<Student>(this.getStudentURL, {params: params}).pipe(
      tap(_ => this.log(`fetched student id=${id}`)),
      catchError(this.handleError<Student>(`getStudent id=${id}`))
    );
  }

  // http.put takes 3 parameters. URL, data to update, options
  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.updateStudentURL, student, this.httpOptions).pipe(
      tap(_ => this.log(`updated student id=${student.studentID}`)),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  // this is the post method to add student
  // expects server or database to create id for student which is returned in Observable<Student> to caller
  addStudent(student: Student): Observable<Student> {
    const params = new HttpParams().append('firstName', 'TestingThisOut');
    console.log(student);
    return this.http.post<Student>(this.addStudentURL, student, {params: params})
    .pipe(
      tap((newStudent: Student) => this.log(`added student w/ id=${newStudent.studentID}`)),
      catchError(this.handleError<Student>('addStudent'))
    );
  }

  // http delete 
  deleteStudent(id: number): Observable<Student> {
    const url = `${this.deleteURL}${id}`;
    console.log(url);
    const params = new HttpParams().append('studentID', id);

    return this.http.delete<Student>(this.deleteURL, {params: params}).pipe(
      tap(_ => this.log(`deleted student id=${id}`)),
      catchError(this.handleError<Student>('deleteStudent'))
    );
  }

  searchStudents(term: string): Observable<Student[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Student[]>(`${this.studentsURL}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found students matching "${term}"`) :
        this.log(`no students matching "${term}"`)),
        catchError(this.handleError<Student[]>('searchStudents', []))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}
