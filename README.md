# Text2SaveNEarn

Javascript calls to send SMS and received SMS

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

For Facebook Account Kit
you need to navigate to https://developers.facebook.com/ to create a new app.

Once your your app has been created, you then create an account kit, 

navigate to +add product , look for account kit and click get started then set it up .

##important

* set the Server URLs to the url of your landing page of your project eg accountkit.dev, localhost/accountkit etc 


* Enable Client Access Token Flow by clicking yes

* Under the Require App Secret field , set it to NO

By now you will have your appid and account kit app secret

To locate account kit app secret, on your developers page on facebook  navigate to  >>Account kit >> and look for Account Kit App Secret

click on show to reaveal

This should be edited on 

1.   .env file   //located in your project folder
2.    ack.js       //located at public/js/

If all goes well then you should give yourself a treat.
