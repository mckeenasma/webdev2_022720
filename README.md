# Final Activity 1

## Steps

1. Initialize node repository ```npm init --y```
1. Install plotly dependency ```npm install --save plotly```
1. Draw your plot.
```js
//1. instantiate plotly
//2. define data
//3. graph options
//4. graph plot
```
1. Setup express scripts
```js
const path = require('path')
const express = require('express')
const app = express()
app.get('/', function(req, res) {
    // move all plotly scripts here
    res.end("Hello World");
});
app.listen(3000)
console.log('Server is running on 192.168.202.106:3000')
```
1. Deploy to Heroku
```js
# Install Heroku CLI
> heroku --version
> heroku login
Logging in... done
Logged in as cbalaman@uic.edu.ph
> heroku create cbalaman
Creating ⬢ cbalaman... done
https://cbalaman.herokuapp.com/ | https://git.heroku.com/cbalaman.git
> git push heroku master
> heroku open
```