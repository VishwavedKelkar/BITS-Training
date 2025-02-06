// Assignment 2: Working with Objects
// Task: Create an object bookLibrary to manage a collection of books.
// The object should have the following properties and methods:
// books: An array of book objects (each book has title, author, and yearPublished).
// addBook(book): Adds a new book to the collection.
// getBooksByAuthor(author): Returns all books by a given author.
// removeBook(title): Removes a book by title.
// Add a method getAllBooks to return a list of all book titles.

const bookLibrary = {
    books: [
        {
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            yearPublished: 1988
        },
        {
            title: 'Eleven Minutes',
            author: 'Paulo Coelho',
            yearPublished: 2003
        },
        {
            title: 'Beloved',
            author: 'Toni Morrison',
            yearPublished: 1987
        },
        {
            title: 'Crime and Punishment',
            author: 'Fyodor Dostoevsky',
            yearPublished: 1866
        },
        {
            title: 'Brave New World',
            author: 'Aldous Huxley',
            yearPublished: 1932
        },
        {
            title: 'The Road',
            author: 'Cormac McCarthy',
            yearPublished: 2006
        },
        {
            title: 'One Hundred Years of Solitude',
            author: 'Gabriel Garcia Marquez',
            yearPublished: 1967
        },
        {
            title: 'The Book Thief',
            author: 'Markus Zusak',
            yearPublished: 2005
        },
        {
            title: 'The Picture of Dorian Gray',
            author: 'Oscar Wilde',
            yearPublished: 1890
        },
        {
            title: 'Veronika Decides to Die',
            author: 'Paulo Coelho',
            yearPublished: 1998
        },
        {
            title: 'The Kite Runner',
            author: 'Khaled Hosseini',
            yearPublished: 2003
        },
        {
            title: 'Life of Pi',
            author: 'Yann Martel',
            yearPublished: 2001
        }
    ],
    addBook(book) {
        if (book.title && book.author && book.yearPublished) {
            this.books.push(book);
            console.log(`Book added successfully : '${book.title}' by '${book.author}' published on ${book.yearPublished}`);
        }
        else {
            console.log("Please provide the complete data (title,author and year published)");
        }
    },
    getBooksByAuthor(author) {
        const bookToFind = this.books.filter(book => book.author === author);
        if (bookToFind.length > 0) {
            console.log('Book found!\n', bookToFind);
        }
        else {
            console.log('Book not found!');
        }
    },
    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index > 0) {
            const removedBook = this.books.splice(index, 1)[0];
            console.log(`The book '${removedBook.title}' is removed.`);
        } else {
            console.log('Sorry! Book not found');
        }
    },
    getAllBooks() {
        const allBooks = this.books.map(book => book.title);
        console.log(allBooks);
    }
};

bookLibrary.addBook({ title: 'The Catcher in the Rye', author: 'J.D. Salinger', yearPublished: 1951 });
bookLibrary.addBook({ title: 'The Catcher in the Rye', yearPublished: 1951 });

bookLibrary.getBooksByAuthor('Yann Martel');
bookLibrary.getBooksByAuthor('J.K. Rowling');

bookLibrary.removeBook('Life of Pi');
bookLibrary.removeBook('Harry Potter');

bookLibrary.getAllBooks();




//outputs:

// Book added successfully: 'The Catcher in the Rye' by 'J.D. Salinger' published on 1951
// Please provide the complete data (title,author and year published)

//Book found!
//  [ { title: 'Life of Pi', author: 'Yann Martel', yearPublished: 2001 } ]
// Book not found!

// The book 'Life of Pi' is removed.
// Sorry! Book not found

// [
//     'The Alchemist',
//     'Eleven Minutes',
//     'Beloved',
//     'Crime and Punishment',
//     'Brave New World',
//     'The Road',
//     'One Hundred Years of Solitude',
//     'The Book Thief',
//     'The Picture of Dorian Gray',
//     'Veronika Decides to Die',
//     'The Kite Runner',
//     'Life of Pi'
//   ]