# Genex-api-xpcp

This is Command line for generate api.

this tool is not ready to use, it's still in the express-mongodb generation stage. but if you are interested in continuing this will be very helpful in generating the api in the cli.

# Use

```
git clone https://github.com/ahhzaky/Genex-api-xpcp.git
```

Ruunning
And run this `node src/index.js`

# Output LOG

```

? package.json already exists! Whould you like to overwrite it? Yes
? What is the name of the project api? (myexpress) ? what is the name of the database you want? (user) Only
? What is the name of the project api? myexpress
? what is the name of the database you want? user
? Description of the api project you want to make? Api standard
? How do you want to run the API? nodemon server.js
this is package.json =>
 {
  name: 'myexpress',
  version: '1.0.1',
  description: 'Api standard',
  main: 'server.js',
  scripts: {
    start: 'nodemon server.js',
    test: 'echo "Error: no test specified" && exit 1'
  },
  keywords: [],
  author: '',
  license: 'Create by jack',
  dependencies: {},
  devDependencies: {}
}
npm WARN genex@1.0.0 No repository field.

+ express@4.17.1
+ mongoose@5.13.3
updated 2 packages and audited 130 packages in 4.298s

15 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


> nodemon@2.0.12 postinstall D:\latihan\MyRESTAPIEXPRESS\myexpress\node_modules\nodemon
> node bin/postinstall || exit 0

npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN genex@1.0.0 No repository field.

+ nodemon@2.0.12
+ dotenv@10.0.0
added 108 packages from 50 contributors and audited 239 packages in 8.661s

25 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


        Runinng api 🔥🔥: npm run start
        Running endpoint 💨💨: http://localhost:3000/
        All Done 👍👍


```
