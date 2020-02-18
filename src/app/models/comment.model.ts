export class Comment {
  id: number;
  title: string;
  text: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(title?: string, text?: string, id?: number) {
    this.id = id || 0;
    this.title = title;
    this.text = text;
  }
}
