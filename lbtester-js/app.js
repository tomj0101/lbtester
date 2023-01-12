const os = require('os');

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8888;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Functions
 */
const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   
function humaFormaBytes(t_size){

  let l = 0, n = parseInt(t_size, 10) || 0;

  while(n >= 1024 && ++l){
      n = n/1024;
  }
  
  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}


/**
 * Data Objects/Constants
 */

const sys_info = {"hostname": os.hostname(), "version": process.env.APP_VERSION};
const health = {"cpu": os.cpus(), "total_memory": humaFormaBytes(os.totalmem()), "free_memory": humaFormaBytes(os.freemem()),"hostname": os.hostname(),"status":"UP"};

/**
 * REST API/endpoint
 */
app.set("view engine", "ejs");

app.get('/v3/ui', (req, res) => {
  res.render("index",sys_info);
});


app.get('/v3/app', (req, res) => {
  console.log("hostname", os.hostname(), " time: ",new Date().toLocaleString("en-US", {timeZone: "America/New_York"}));
  res.json(sys_info);
});


app.get('/v3/health', (req, res) => {
  res.json(health);
});


app.listen(port, () => console.log(`Welcome, app listening on port ${port}!`));