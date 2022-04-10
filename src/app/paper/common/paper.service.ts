import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paper } from './models/paper';

const baseUrl = 'https://gtu-paper-finder.herokuapp.com/';

@Injectable({
  providedIn: 'root',
})
export class PaperService {
  constructor(private http: HttpClient) {}

  getPaper(branchName: string, subjectCode: string): Observable<Paper[]> {
    return this.http.get<Paper[]>(`${baseUrl}/${branchName}/${subjectCode}`);
  }
}
