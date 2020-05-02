/*
INFO30005 Group Assignment - Pear: Conversation Constants

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// define report constants

//constants for status
const PENDING = 0 //also used in outcomes
const PROCESSED = 1

//constants for outcomes

//action taken after report is to ban account
const BANNED = 1

//action taken after report is to delete (the inappropriate) message
const DELETED = 2

//no action is taken in response to the report (invalid reason)
const IGNORED = 3

// export all constants
module.exports = {
    PENDING,
    PROCESSED,
    BANNED,
    DELETED,
    IGNORED
}