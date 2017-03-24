# **Message Board**
#### Brendan Grubb, 3/24/2017


&nbsp;
## Description
**Message Board** is a Javascript application that demonstrates my ability build a project using the Ember framework. The users of **Message Board** are able to post questions to a forum. Users can also respond to specific questions.


&nbsp;
## Setup/Installation Requirements
##### _To view and use this application:_
* It is necessary to download and install the following programs to use this application
  * [Git](https://git-scm.com/)
  * [Node.js](https://nodejs.org/) (with NPM)
  * [Bower](https://bower.io/)
  * [Ember CLI](https://ember-cli.com/)
  * [PhantomJS](http://phantomjs.org/)
* Go to my [Github repository](https://github.com/Brendangrubb/message-board)
* Download the zip file via the green button and unzip the file
* Open Terminal and navigate to **_message-board-master_** project folder
* Type the following commands in Terminal:
  * npm install
  * bower install
  * ember s
* Visit [http://localhost:4200](http://localhost:4200)
* The application will be ready to use!


&nbsp;
## Planning

#### Basic UI
* On the main page of the forum, the user is able to post a question. They are also able to view a list of all questions currently posed to the forum. The user is able to click on any of the questions on the main page to see more detailed information about the question and questioner. From this page, users can delete questions or post answers or comments to that question. They will also be able to delete their answers/comments.

#### MVP Checklist
**Initial Files**

  * write README
  * create ember project
  * add and link repository
  * install extra dependencies  (bootstrap, moment)

**Routes**
  * add routes
    * index
    * about/contact
    * question
  * populate static routes
    * application
      * header- contact, about & home links, logo
      * persistent html- head(for fonts), body, container
    * about/contact
      * email, address, founder info
      * company bio

**Initial Models & Components**
  * models (1 of 2)
    * add post model (question, author, notes, category, timestamp)
    * add response model (answer, responder, category, timestamp)
    * write seed.json
    * create Firebase DB
      * change permissions
      * install emberfire
      * add API info to environments.js
      * upload seed.json
  * components (1 of 3)
    * display all posts (on index route)
    * show new post form (on index route)
    * add new post (on index route)

**Secondary Models & Components**
  * add dynamic routing
    * router- add path to question route
    * question.js- update model hook
    * index (display all posts component)- add links to questions
  * components (2 of 3)
    * delete post (on question route)
    * show update post form (on question route)
    * update post (on question route)
  * models (2 of 2)
    * update models to include hasMany (post) & belongsTo (response)
  * components (3 of 3)
    * display all responses associated with this post (on question route)
    * delete specific response (on question route)
    * refactor delete post to include responses associated with that post

#### Style
* choose global font
* set media page sizes
* layout (forms, columns)
* add scroller
* color scheme

#### Refactor
  * try to break site
  * check dryness of code
  * delete console.logs
  * check spacing
  * doublecheck README for setup instructions and other information


&nbsp;
## Known Bugs
* No known bugs


&nbsp;
## Technologies Used
* Ember
* AJAX
* Node and npm
* Bower
* CSS
* Bootstrap
* HTML


&nbsp;
## Ember Suggests These Useful Links
* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


&nbsp;
_If you have any questions or comments about this program, you can contact me at [brendangrubb@gmail.com](mailto:brendangrubb@gmail.com)._

Copyright (c) 2017 Brendan Grubb

This software is licensed under the GPL license
