# Full Stack Message Board

* [x] Create Server Folder
  * [x] Init npm
  * [x] Add express morgan cors body-parser
  * [x] Create Hello World Route
* [ ] Add DB to server
  * [ ] Add monk joi
  * [ ] Create todo model
  * [ ] Create route to add task to db
    * [ ] validate task with joi
      * title
      * reminder default false 
      * done default false
      * created_at
    * [ ] insert task into db
    * [ ] respond with inserted message
* [ ] When page loads show all todo that are pending on page
  * [ ] Server route to GET all todo
  * [ ] Server route to get pending todo
* [ ] Create new task form on client
  * [ ] Submit form - fetch POST to server
  * [ ] Show any errors
  * [ ] Show new message on page
* [ ] show notifications that have past 1w of creation and are pending
* [ ] Deploy!