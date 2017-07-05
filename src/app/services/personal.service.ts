import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {PersonalRecord} from "../models/personal-record";

@Injectable()
export class PersonalService {
  private API_PATH = '/api/personal';

  constructor(private http: Http) {}

  getRecords(): Observable<PersonalRecord[]> {
    return this.http.get(`${this.API_PATH}`)
      .map(res => res.json() || []);
  }
}
