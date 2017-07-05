import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {EducationRecord} from "../models/education-record";

@Injectable()
export class EducationService {
  private API_PATH = '/api/education';

  constructor(private http: Http) {}

  getRecords(): Observable<EducationRecord[]> {
    return this.http.get(`${this.API_PATH}`)
      .map(res => res.json() || []);
  }
}
