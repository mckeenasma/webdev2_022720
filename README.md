# Finals - Activity 1
Plot.ly + Express + Heroku

## Todos
- [] Use any visualization tool (e.g. [Plotly](https://plot.ly/))
- [] Integrate plotly and express
- [] Deploy to Heroku

## Steps

1. Initialize node repository ```npm init --y```
1. Install plotly dependency ```npm install --save plotly```
1. Draw your plot.
```js
//a. instantiate plotly
//b. define data
//c. graph options
//d. graph plot
```
4. Setup express scripts
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
5. Deploy to Heroku (note: setup ```Procile```, ```.gitignore```, and ```PORT```)
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
## Official Heroku URI
|  Name | Heroku URI  |
|---|---|
| Bandong  | https://kbandong.herokuapp.com/  |
| Palma  | https://jpalma.herokuapp.com/  |
| Yee  | https://jyee.herokuapp.com/  |
| Lalis  | https://jlalis.herokuapp.com/  |
| Evangelista | http://jevangelista.herokuapp.com/  |
| Villamil  | http://rvillamil.herokuapp.com/  |
| Catacutan  | http://rcatacutan.herokuapp.com/  |
| Coronado  | http://ecoronado.herokuapp.com/  |
| Prieto  | http://jprieto.herokuapp.com/  |
| Villaflores  | http://jvillaflores.herokuapp.com/  |
| Montaner  | https://tmontaner.herokuapp.com/  |
| Barcena  | https://cbarcena.herokuapp.com/  |
| Roble | http://nroble.herokuapp.com/  |
| Alemania  | http://calemania.herokuapp.com/  |
| Gomera  | http://ngomera.herokuapp.com/  |
| Nicolas  | http://jnicolas.herokuapp.com/  |
| Colomer | https://jcolomer.herokuapp.com/  |