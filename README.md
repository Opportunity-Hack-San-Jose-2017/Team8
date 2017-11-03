# Text2SaveNEarn

Javascript calls to send SMS and received SMS(Work in Progress)

1. Clone the repository using ```git clone```

2. cd into project folder

3. run ```npm install```

4. run ```touch .env``` in the root of the folder

5. Open ```vi .env``` file to and add twilio keys

    Note: You should be a registred twilio user to generate keys and twilio_phone_number

   * ```SID=Account_SID_key```
   * ```Token=Account_Auth_Token```
   * ``` number=Registered_Twilio_number```

6. run ```touch .gitignore```

7. Add node_modules and .env file(keep your keys protected) to .gitignore

8. run ```npm start```

It is an express app which runs on localhost://3000
