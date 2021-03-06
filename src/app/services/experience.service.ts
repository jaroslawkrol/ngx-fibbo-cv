import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {ExperienceRecord} from "../models/experience-record";

@Injectable()
export class ExperienceService {
  private API_PATH = '/api/experience';

  constructor(private http: Http) {}

  getRecords(): Observable<ExperienceRecord[]> {
    return this.http.get(`${this.API_PATH}`)
      .map(res => res.json() || []);
  }
}
