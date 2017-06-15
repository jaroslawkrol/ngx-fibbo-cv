export class PersonalRecord {
  name: string;
  position: number;
  logo: string;
  description: string;

  constructor(name: string, position: number, logo: string, description?: string) {
    this.name = name;
    this.position = position;
    this.logo = logo;
    this.description = description || 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem' +
      'accusantium doloremque laudantium, totam rem aperiam eaque ipsa';

  }
}
