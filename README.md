#BREADCRUD

This is BreadCrud the app that allows you to create, read, update, and delete data regarding your favorite breads. You can create your own bread item and tell the world about it and give it a baker and delete it if you so choose. It is simple, once the app is loaded you can see a list of the breads and bakers. You can add a new bread or go to and edit the ones that exist.

Description
The app runs off an express backend and has these dependencies: express, express-react-views, , method-override, mongoose, nodemon, react, and react-dom

Technical Info
To install this you clone the repository, open the project in an ide, in your terminal run npm init -y and npm i, then go to localhost:3000. To contribute to the project make sure that you are making your changes to an alternate branch to the main branch to make sure the official version does not get corrupted or changed. To maintain that the project keeps a uniform series of changes we need to use the same dependencies and make sure developers introduce too many foreign techniques and dependencies.

Issues:
None

API Explanation

Bakers:
the get route retrieves the bakers and their info and displays it to the user and thats the only route for the bakers

BREADS:
the get route finds the breads and displays their names to the user
the get new route renders the new model and allows the user to make a new bread through the post route
the get by id route retrieves a specific bread through its id in the database
the get by id and edit route pulls up the edit page allowing the user to edit the info about the bread
the delete route does exactly what it sounds like, it deletes a bread by its id in the db
the put route actually edits the bread and its info in the db
