To test the app, follow the steps below:

1) Clone the repo
2) npm install
3) start the server by running: "npm run start:dev"
4) visit the localhost:3000 to confirm the app is running
5) Create a database in your MySQL and name it "bookrestapi"
6) Test the endpoints on Postman or any API client of your choice by taking the following steps:
  i. GET Request- get all books (Fetch all the records of books from the database) - localhost:3000/books <br>
  ii. POST Request- create book (create a book record) - localhost:3000/books -

      Request params: {
        name,
        detail,
        page,
        author
      }
<br>
  iii. GET Request-  get a book (Fetch a book from the database by the id) - localhost:3000/books/:id <br>
  iv. PUT Request- update a book (Update book record on the database) - localhost:3000/books/:id

  Request params: {
        name,
        detail,
        page,
        author
      }
<br>
  v. DELETE Request - Delete a book (Remove a book record from the database by its id)- localhost:3000/books/:id

  <br><br>
  
  All the best!