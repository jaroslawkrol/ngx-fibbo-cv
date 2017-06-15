import {SkillRecord} from "./skill-record";

export class SkillsGroup {

  name: string;
  position: number;
  skills: SkillRecord[];

  constructor(name: string, position: number, skills: SkillRecord[]) {
    this.name = name;
    this.position = position;
    this.skills = skills;
  }
}
