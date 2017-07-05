import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {SkillsGroup} from "../models/skills-group";

@Injectable()
export class SkillsService {
  private API_PATH = '/api/skills';

  constructor(private http: Http) {}

  getGroups(): Observable<SkillsGroup[]> {
    return this.http.get(`${this.API_PATH}`)
      .map(res => res.json() || []);
  }
}
