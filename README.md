# info30005-pear

INFO30005 Group Assignment - Pear

Authors: Glenn Deevesh Chanho Gemma Dimitri

Link to heroku:
https://info30005-pear.herokuapp.com/

@@@include questions 5 - 7

For the core functionalities that your group has chosen, please write 2-3 sentences describing each functionality. You can describe what functions each feature achieves, inputs, and outputs.

Accounts
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
