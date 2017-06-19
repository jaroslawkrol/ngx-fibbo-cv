export class SkillRecord {
  name: string;
  description: string;
  level: number;
  position: number;
  logo: string;

  constructor(name: string, description: string, level: number, position: number, logo: string) {
    this.name = name;
    this.description = description;
    this.level = level;
    this.position = position;
    this.logo = logo;
  }
}
