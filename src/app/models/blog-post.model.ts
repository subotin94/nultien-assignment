export class BlogPost {
  id?: number;
  title: string;
  text: string;
  categoryId?: number;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(title: string, text: string, categoryId?: number, id?: number) {
    this.id = id || 0;
    this.title = title;
    this.text = text;
    this.categoryId = categoryId || 0;
  }
}
