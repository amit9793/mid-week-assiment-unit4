const  express = require('express');
 const mongoose = require('mongoose');

 const app = express();

 const connect = require('./src/config/db');
 

 const jobs = require('./src/config/models/all-model');
 const allCont = require('./src/config/models/controllelrs/all');

 const locations = require('./src/config/models/location');
 const locat = require('./src/config/models/controllelrs/location-cont');

const works = require('./src/config/models/work_type');
const worktype = require('./src/config/models/controllelrs/type');

const skill = require('./src/config/models/skill-model');
const skills = require('./src/config/models/controllelrs/skill-controller');

 app.use(express.json());
 app.use('/jobs', allCont);
 app.use('/locations', locat);
 app.use('/works', worktype)
 app.use('/skill', skills)

 app.listen(2345, async function(){
     await connect();
     console.log("listening on port 2345");
 })