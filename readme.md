
## Welcome

run `npm install` to install all the dependencies
to use nodemon simply run `npm run start`

## MongoDb

We will be using <https://mongolab.com/> as our cloud database service,so go ahead and create an account and create new MongoDb Deployment and set plan to sandbox.
Once your Deployment is created go into it and add collection called 'users', next create new user that we will use to access our newly created collection.
Now copy 'standard MongoDB URI' and past it into `var mongoDbUrl` inside our server.js file. Done.

Now you should be able to add and delete users.
