export class Book{
    public name: String;
    public description: String;
    public bookId: String;
    public isbn:String;
    public author:String;
    public title:String;
    public publisher:String;
    public year_of_publication:String;
    public location:String;
    public num_of_copies:String;
    public current_status:String;


    constructor(bookId: String,
        name:String,
        description:String,
        isbn: String, 
        author: String,
        publisher:String, 
        title:String,
        year_of_publication:String,
        location:String,
        num_of_copies:String,
        current_status:String){
            this.name = name;
            this.description = description;
            this.bookId = bookId;
            this.isbn = isbn;
            this.author = author;
            this.title = title;
            this.publisher = publisher;
            this.year_of_publication = year_of_publication;
            this.location = location;
            this.num_of_copies = num_of_copies;
            this.current_status = current_status;
    }
}