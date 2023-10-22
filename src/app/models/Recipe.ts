export class Recipe {
  name: string;
  title?: string;
  image?: string;
  description?: string[];
  icon?: string;

  constructor(name: string, ) {
    this.name = name;

  }
}
