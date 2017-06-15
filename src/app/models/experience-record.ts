export class ExperienceRecord {
  range: string;
  name: string;
  position: number;
  logo: string;

  constructor(range: string, name: string, position: number, logo: string) {
    this.range = range;
    this.name = name;
    this.position = position;
    this.logo = logo;
  }
}
