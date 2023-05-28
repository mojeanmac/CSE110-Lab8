# Lab 8 - Starter

Molly MacLaren

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
    1. Within a Github action that runs whenever code is pushed 
        - Others can see the results of the tests you ran.
2. Would you use an end to end test to check if a function is returning the correct output?
   - No, only unit testing would be necessary.
3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   - No, a message feature is too abstract and has too many moving parts. I would test individual aspects of the feature though.
4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   - Yes, it would be really easy to test with a message > 80.