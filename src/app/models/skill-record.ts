export class SkillRecord {
  name: string;
  level: number;
  position: number;
  logo: string;

  constructor(name: string, level: number, position: number, logo: string) {
    this.name = name;
    this.level = level;
    this.position = position;
    this.logo = logo;
  }
}
