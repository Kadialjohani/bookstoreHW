// bookstoreHW

// the array
books = [
    {
        title: "less than zero",
        author: "stuart j. murphy, frank remkiewicz",
        pages: 40,
        available: true,

    },
    {
        title: "neverwhere",
        author: "neil Gaiman",
        pages: 400,
        available: false,
        borrower: "sarah",

    },
    {
        title: "mac and cheese",
        author: "sarah weeks, jane manning",
        pages: 32,
        available: true,

    },
    {
        title: "little, big",
        author: "john crowley",
        pages: 576,
        available: false,
        borrower: "mike",

    },
    {
        title: "What Looks LIke Crazy On an Ordinary Day",
        author: "Pearl Cleage",
        pages: 256,
        available: false,

    },
]

// the functions
// func1 loop + print title author and pages for each
const booksDetails = books.map(function(x){
    let result = `"${x.title}" by "${x.author}" about "${x.pages}" pages`
    return result
})
console.log("=========title+author+pages=======");
console.log(booksDetails);

// func2 with 2 params check if available, if so borrow it

const borrowBook =(title, borrower)=>{
    
    books.find(function(x, i){

  
        if (x.title === title && x.available == true) {
            x.available = false;
            books[i].borrower = borrower;
            let result =  console.log(x);
            return result;
        } 
        if (x.title === title && x.available == false) {
            console.log(`the "${title}" book is not available right now`);
        }
        
    
        });
        
    };


console.log("========borrowing a book=========");
borrowBook("mac and cheese", "greg") //available
borrowBook("neverwhere", "anon") //not available

// func3 one param if book borrowed return it delete borrower update available
const returnBook =(title)=>{
    
    books.find(function(x, i){
        // x.title === title
        if (x.title === title && x.borrower) {
            x.available = true;
            delete x.borrower;
            console.log(x)

        };
    })
}
console.log("========ruturning a book=========");
returnBook("little, big")




// func4 repeat func1 + the borrower if any

const booksDetails2 = books.map(function(x){
    
    if (x.borrower) {
        let result = `"${x.title}" by "${x.author}" about "${x.pages}" pages, but its borrowed and the borrower is "${x.borrower}"`
        return result
    }
    return `"${x.title}" by "${x.author}" about "${x.pages}" pages`
})
console.log("=========title+author+pages+borrower=======");
console.log(booksDetails2);

// func5 one param it should be object add it to books array

const addBook =(titleInput,authorInput,pagesInput)=>{
    books.push({title: titleInput, author: authorInput, pages: pagesInput})

} 
console.log("=========new book added=======");
addBook("addedBookTitle","addedBookAuthor",65)
console.log(books);



// func6 search with one param through title, author or borrower

const searchBook =(term)=> {

    books.forEach((x) => {
        if(x.title.includes(term) || x.author.includes(term)){
            console.log(x);
        }
        if(x.borrower && x.borrower.includes(term)){
            console.log(x);
        }})
    }
        
console.log("=========search for sarah; 2 arrays (1 she is the borrower, 2 she is the author)=======");
searchBook("sarah")