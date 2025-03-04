class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
     this.name = name
     this.releaseDate = releaseDate
     this.pagesCount = pagesCount
     this._state = 100
     this.type = null
   }
 
   fix() {
         this._state = Math.min(this._state * 1.5, 100);
   }

   get state() {
     return this._state
   }
   
   set state(newState) {
     if (newState < 0) {
       this._state = 0
     }
     else if (newState > 100) {
       this._state = 100
     } else {
       this._state = newState
     }
   }
 }
 
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
 
 const picknick = new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
 
 console.log(picknick.author) //"Аркадий и Борис Стругацкие"
 picknick.state = 10
 console.log(picknick.state) //10
 picknick.fix()
 console.log(picknick.state) //15
 