# Web Dev Primer (Workshop_1)

This documentation is in reference to the code that should be taken into consideration while reading the article covering workshop 1 on web development help by COPs IIT Varanasi.

## Contents
* Frontend code
  1. HTML file
  2. CSS file
  3. JS file
* Backend Code
  1. NodeJS application code
 
 ## How to get started ?
 As our first workshop is inclined toward the client side of web application, I would not recommend you to jump straight to the server code.
 The frontend code is pretty easy to understand.
**To see the fontend in action**, download python on your system and open a terminal. change you directory in the terminal until you reach the root of the frontend folder.
It should look something like this.

IMAGE HERE

now type the command in your terminal to start a HTTP server (don't worry about the terms, this will be discussed later).
```bash
python -m SimpleHTTPServer 8000
```
The '8000' here is the PORT number on which the server shall listen for requests. Now go to your web browser and type **http://127.0.0.1:8000**. You will notice that the last part of the url
is the same port number, as we are going to request for the HTML files from the python server that is listening on? yup you guessed it. PORT **8000**.
As soon as you do, you shall be greeted with this page.

IMAGE HERE

## Testing with backend hosted remotely?
Well you can go ahead and make changes to the frontend files, save and refesh the page to see the effects then and there. But the send button will through errors becuase it has the wrong address for the POST request.
Now this is because the backend server is not hosted on that address and as I cannot teach you anything about backend in this workshop, hence I have done the hard part for you.
Yes! I have hosted a backend server for you, but it is not on your system, in fact it is hosted on a server farm by heroku.

If you wanna check that out, I can give you a tour of it at https://protected-gorge-48405.herokuapp.com/

**Remeber the article said that the producation level build has the frontend and backend on the same server**, well this is the production build.
But I also told you that **development of frontend and backend can be done seperately with no issues at all**, so guess what, you can actaully communicate with my server using the frontend running on your system.

## How to experiment with the code
To tell your frontend to communicate with my server when you press the send button, you need to tell the code **where to send POST request** when the send button is clicked.
The **where** in the internet is decided by url. So why don't we quickly go and change the code in the JS file where the url is pointing to **http://127.0.0.1:8000**

This is what you need to do:
Change this line in your **main.js**
```javascript
requestObject.open('POST', 'http://127.0.0.1:8000/testapiendpoint/post/', true);
```
to this
```javascipt
  requestObject.open('POST', 'https://protected-gorge-48405.herokuapp.com/testapiendpoint/post/', true);
```

Save, Reload and try hitting the send button again. Bingo!! You did it...

Now that you know how to develop the frontend on your computer and test it with the backend code hosted at a remote location, I guess you are ready for some challenge.:smile:

Here is the list of urls and the type of request it expects you to send, let's see if you can hit them with your code.
