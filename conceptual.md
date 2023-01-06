### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JSON Web Token
- What is the signature portion of the JWT?  What does it do?
The signature is used to authenticate a user. It is user specific secret key.
- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes using the decode function.
- How can you implement authentication with a JWT?  Describe how it works at a high level.
A user logins in sending a request to AJAX login. The server will authenticate and sign/return the token. This is stored in localStorage and sent in future request.
- Compare and contrast unit, integration and end-to-end tests.
Integration test the small specific pieces of code. End-to-end test is the overall user flow test not specific code.
- What is a mock? What are some things you would mock?
A mock is a fake object simulating the a real situation. You should mock when an object under test may have dependencies on other (complex) objects
- What is continuous integration?
Continuous integration is a software development strategy that increases the speed of development while ensuring the quality of the code that teams deploy.
- What is an environment variable and what are they used for?
An environment variable is a variable whose value is set outside the program. It is used to be able to call on a variable at any time. The primary use case for environment variables is to limit the need to modify and re-release an application due to changes in configuration data. Sometimes used for keys(api).
- What is TDD? What are some benefits and drawbacks?
TDD is Test Driven Development. It helps maintain your code and only use what is needed. Drawbacks are test need to be maintained and can be a slow process.
- What is the value of using JSONSchema for validation?
Prevent bad code getting to your database. Also a easy to set up and maintain validation system.
- What are some ways to decide which code to test?
It is good to test things that can break your code. Methods are good to test often.
- What does `RETURNING` do in SQL? When would you use it?
Returning is used to return data after inserting it. You would use this when data is being submitted by a user.
- What are some differences between Web Sockets and HTTP?
Web Sockets are faster then HTTP. It's used for real time communication. HTTP is stateless once it gets what it ask for the connection stops.
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I feel like Flask was more simple and easy to use but Express was more in-depth. Overall I would most likely prefer Flask. This may change after making some full stack project with Express.
