# note-app
just before you get through the code
this is me cooking beans with node js, express and mongodb😈😈

![images](https://user-images.githubusercontent.com/70198597/173223568-e6952c8f-ef4a-4bf7-b748-f5ab59fc1842.jpeg)


**TO START THE APP**🦵
1. type "npm i" to install dependencies
2. type "npm run dev" on your terminal

**EXISTING ROUTES**
1. notes/all_notes (fetched all the notes in the db)📜
2. notes/new_note (creates a new note in db)✉️
3. notes/update_note (updates a note in the db)
4. notes/delete_note (delete a particular note by its id)

the note app is explicitly split into different folders
each to serve or perform  a particular function or use case
here we have 

--controllers
    |
    |-- they take in data and perform various functions like handling note creation, note update,note deletion, get all notes and interact with services which in turn interact with mongo db
    
-- services
    |
    |-- they receive data directly from controllers and interact with db to return the response of queries made to it
    
    
-- config
    |
    |--contains the config code for connecting the app to mongodb using mongoose
    
    
-- models
    |
    |-- it holds the mongoose schema that perdoms various operations on db
    
    
    
-- routes
    |
    |--index.routes
        - holds the index to access all operations that can be done in the note app
    |--notes.routes
        - holds the different routes for the note app
        
        
-- validators
    |
    |--holds the validator schema and functions used for validating requests made to the note app
    
    
-- middlewares
    |
    | -- holds the various middlwares used in the note app like error handling,connecting the app to db
    

**endpoints examples**
**note** authorization tokens must be passed to request headers to create a note,get a note, update a note and delete a note.
auth tokens are gotten from login response.
1. create new user: https://compact-note.herokuapp.com/note-app/create .....body{email:email,password:password}
2. login user : https://compact-note.herokuapp.com/note-app/login .....body{email:email,password:password}
3. create note: https://compact-note.herokuapp.com/note-app/notes .....body{"title":"things fall apart",
    "content":"things will always fall apart",
    "category":"sports",
    "email":"emmanuel@gmail.com"}
4. get users notes : https://compact-note.herokuapp.com/note-app/notes/{users email}
5. update note: https://compact-note.herokuapp.com/note-app/notes ....body{id:id, content:content,title:title}....id is required to update 
6. delete note: https://compact-note.herokuapp.com/note-app/notes.....body{id:}

   **NOTE CATEGORIES**
    
    Note 
    
    1. that you cannot create a new note without tagging it to an existing category
    2. trying to create a new note with a category that does not exist in the list of categories will return error response
    3. note category must be one of these 
    
    sports⚽️,
    
    fashion🕺,
    
    nature☘️,
    
    religion📔,
    
    technology🛸
    
