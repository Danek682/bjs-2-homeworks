class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
     super(name, releaseDate, pagesCount)
     this.type = "magazine"
   }
 }
 
 class Book extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount, author) {
     super(name, releaseDate, pagesCount)
     this.author = author
     this.type = "book"
   }
 }
 
 class NovelBook extends Book {
   constructor(name, releaseDate, pagesCount, author) {
     super(name, releaseDate, pagesCount, author)
     this.type = "novel"
   }
 }
 
 class FantasticBook extends Book {
   constructor(name, releaseDate, pagesCount, author) {
     super(name, releaseDate, pagesCount, author)
     this.type = "fantastic"
   }
 }
 
 class DetectiveBook extends Book {
   constructor(name, releaseDate, pagesCount, author) {
     super(name, releaseDate, pagesCount, author)
     this.type = "detective"
   }
 }