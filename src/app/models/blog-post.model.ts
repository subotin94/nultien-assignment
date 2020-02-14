export class BlogPost {
  id?: number = 0;
  title: string;
  text: string;
  categoryId?: number = 0;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(title: string, text: string, id?: number, categoryId?: number) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.categoryId = categoryId;
  }
}
