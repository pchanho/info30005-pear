# info30005-pear

INFO30005 Group Assignment - Pear

Authors: Glenn Deevesh Chanho Gemma Dimitri

Link to heroku:
https://info30005-pear.herokuapp.com/


##Q5. Accounts

Account system allows users to create and manage their account utilising password encryption for account security. Accounts are then securely checked for email and password verification before access is granted to the user into the application. Users can also manage their accounts changing password and email addresses where necessary, meanwhile managing and viewing their friends list.

* All controllers within the account functionality can be accessed via ../account/<nameOfRouter> and then tested using relevant parameters

* Note: all parameters require a key value pair

####CREATE

Create account
>URL: ../account/create
>
>Parameters: firstName, lastName, email, password and birthday

####READ

Read all accounts 
>URL: ../account/readAll 
>
>Parameters: NULL

Read one account
>url: ../account/readOne
>
>Parameters: id

Read friends array
>url: ../account/readFriends
>
>Parameters: id

Login to the account
>url: ../account/login
>
>Parameters: email, password

####UPDATE
Update a user's email address
>url: ../account/updateEmail
>
>Parameters: id, email

Update users password
>url: ../account/updatePassword
>
>Parameters: id, password, newPassword

Update users first name and last name
>url: ../account/updateName
>
>Parameters: id, firstName, lastName

Deactivate an account
>url: ../account/deactivate
>
>Parameters: id

Add a friend to a user's friends id array
>url: ../account/addFriend
>
>Parameters: id, friendsId

####DELETE
Delete an account
>url: ../account/delete
>
>Parameters: id

Delete a friend from a user's friends id array
>url: ../account/deleteFriend
>
>Parameters: id, friendsId

##Q6. Conversation


##Q7. Supports

Supports functionality comprises a system that has many different features to support the user. This includes:

###1)Report

The report feature allows users to report other users who post inappropriate content in messages. When this happens, a record is submitted, which can then be reviewed by an admin.
Also, when reporting users can choose to include the message to be reported or not. Where admin will assume that without a specific message, user wishes to ban the other user entirely.

* All controllers within the report functionality can be accessed via ../report/<nameOfRouter> and then tested using relevant parameters
* Note: all parameters require a key value pair

####CREATE
Create report
>URL ../report/create
>	
>Parameters: accountId, messageId, reason

####READ
Read all report
>URL: ../report/readAll
>	
>Parameters: NULL

Read one report
>url: ../report/readOne
>
>Parameters: id

Read all reports based on specific status
>url: ../report/readStatus  
>
>Parameters: status

Read all reports based on specific outcome
>url: ../report/readOutcome
>
>Parameters: outcome

####UPDATE
Update a user’s report
>url: ../report/update
>
>Parameters: id, accountId, messageId, reason

Update report’s status
>url: ../report/updateStatus
>
>Parameters: id

Update report’s followed by more processing depending on outcome value
>url: ../report/updateOutcome
>
>Parameters: id, outcome

Add report id to Account’s reportHistoryId array
>url: ../report/addReportHistory
>
>Parameters: id, accountId

####DELETE
Delete a report
>url: ../report/delete
>
>Parameters: id

###2)Support
Support system suggests user guide contents for users depending on a certain context. This system guides users after they sign up, describing how to use Pear service. Also, it provides support contents to help users join the conversation and find conversation topics.

* All controllers within the support functionality can be accessed via ../support/<nameOfRouter> and then tested using relevant parameters
* Note: all parameters require a key value pair

####CREATE
Create a support content
>url: ../support/create
>
>Parameters: title, body, video(optional), image(optional)

####READ
Read all support contents
>url: ../support/readAll
>
>Parameters: NULL

Read one support content
>url: ../support/readOne
>
>Parameters: id

####UPDATE
Update a support content
>url: ../support/update
>
>Parameters: id, title, body, video(optional), image(optional)

####DELETE
Delete a support content
>url: ../support/delete
>
>Parameters: id

###3)Frequently Asked Questions(FAQ)
FAQ functionality allows users to read and query for frequently asked questions that we store in a database in case they need help.

* All controllers within the FAQ functionality can be accessed via ../faq <nameOfRouter> and then tested using relevant parameters
* Note: all parameters require a key value pair

####CREATE
Create an FAQ expecting
>url: ../faq/create
>
>Parameters: title, body, updatedAt

####READ
Read all FAQs
>url: ../faq/readAll
>
>Parameters: NULL

Read up to 5 FAQs
>url: ../faq/readAll
>
>Parameters: NULL

Read up to 5 FAQs
>url: ../faq/read5
>
>Parameters: NULL

Read up to next 5 FAQs
>url: ../faq/readNext5
>
>Parameters: NULL

####UPDATE
Update a FAQ
>url: ../faq/update
>
>Parameters: title, body, updatedAt

####DELETE
Delete a FAQ
>url: ../faq/delete
>
>Parameters: id

####SEARCH
Search a FAQ in our database with the user inputs
>url: ../faq/search/[:query]
>
>Parameters: url query ex) "Conversation" or "Con", "Free" or "Fr"
