# info30005-pear

INFO30005 Group Assignment - Pear

Authors: Glenn Deevesh Chanho Gemma Dimitri

Link to heroku:
https://info30005-pear.herokuapp.com/

@@@include questions 5 - 7

For the core functionalities that your group has chosen, please write 2-3 sentences describing each functionality. You can describe what functions each feature achieves, inputs, and outputs.

Q5. Accounts
Allows users to create and manage their account utilising password encryption for account security. Accounts are then securely checked for email and password verification before access is granted to the user into the application. Users can also manage their accounts changing password and email addresses where necessary, meanwhile managing and viewing their friends list.

Please provide the details to access the first core functionality. The details can include the URL that the marker can use to access the functionality via the web browser. If you implement any authentication, then please setup a demo account and provide the details here as well. Your marker will inspect the code and test the functionality via a web browser.

	- All controllers within the account functionality can be accessed via ../accounts/<nameOfRouter> and then tested using relevant parameters
	- Note: all parameters require a key value pair

CREATE
	- Create account
		URL ../account/create
		Parameters: firstName, lastName, email, password and data of birth

READ
	- Read all accounts
		URL: ../accounts/readAll
		Parameters: NULL
	- Read one account
		url: ../account/readOne
		Parameters: id
	- Read friends array
		url: ../account/readFriends
		Parameters: id
	- Login to the account
		url: ../accounts/login
		Parameters: email, password

UPDATE
	- Update a user's email address
		url: ../account/updateEmail
		Parameters: id, email
	- Update users password
		url: ../account/updatePassword
		Parameters: id, password, newPassword
	- Update users first name and last name
		url: ../account/updateName
		Parameters: id, firstName, lastName
	- Deactivate an account
		url: ../account/deactivate
		Parameters: id
	- Add a friend to a user's friends id array
		url: ../account/addFriend
		Parameters: id, friendsId

DELETE
	- Delete an account
		url: ../account/delete
		Parameters: id
	- Delete a friend from a user's friends id array
		url: ../account/deleteFriend
		Parameters: id, friendsId

Q6. Conversation


Q7. Supports

1)Report

2)Support
Suggest user guide contents for users depending on a certain context

- All controllers within the Support functionality can be accessed via ../support/<nameOfRouter>
	and then tested using relevant parameters
- Note: all parameters require a key value pair

CREATE
	- Create a support content
		url: ../support/create
	 	Parameters: title, body,
    						video(optional), image(optional)

READ
	- Read all support contents
		url: ../support/readAll
		Parameters: NULL

	- Read one support content
		url: ../support/readOne
		Parameters: id

UPDATE
	- Update a support content
		url: ../support/update
		Parameters: id, title, body,
    						video(optional), image(optional)

DELETE
	- Delete a support content
		url: ../support/delete
		Parameters: id

3)Frequently Asked Questions(FAQ)
Allows users to read and query for frequently asked questions that we store in a database in case they need help.

- All controllers within the FAQ functionality can be accessed via ../faq/<nameOfRouter> and then tested using relevant parameters
- Note: all parameters require a key value pair

CREATE
	- Create an FAQ expecting
		url: ../faq/create
	 	Parameters: title, body, updatedAt

READ
	- Read all FAQs
		url: ../faq/readAll
		Parameters: NULL

	- Read up to 5 FAQs
		url: ../faq/read5
		Parameters: NULL

	- Read up to next 5 FAQs
		url: ../faq/readNext5
		Parameters: NULL

UPDATE
	- Update a FAQ
		url: ../faq/update
		Parameters: title, body, updatedAt

DELETE
	- Delete a FAQ
		url: ../faq/delete
		Parameters: id

SEARCH
	- Search a FAQ in our database with the user inputs
		url: ../faq/search/[:query]
		Parameters: url query
								ex) "Conversation" or "Con", "Free" or "Fr"
