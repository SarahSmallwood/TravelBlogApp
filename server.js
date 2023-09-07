require('dotenv').config();
require('./config/database');

const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const path = require('path');
const multer  = require('multer');
const cors = require('cors');
const Posts = require('./models/Posts')

const app = express();
app.use(cors());
app.use(express.json());

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'public/Images')
//     }, 
//       filename: (req, file, cb) => {
//         cb(null, file.fieldname + "_" + Date.now() +  path.extname(file.originalname))
//       }
//   })
// const upload = multer({
//   storage: storage
// })
// app.post('/upload',upload.single('file'),(req, res) => {
//   console.log("Upload being executed")
//   Posts.create({image: req.file.filename})
//   .then(result => res.json(result))
//   .catch(err => console.log(err))
// })
  
// app.get('/getImage', (req,res) => {
//   Posts.find()
//   .then(users => res.json(users))
//   .catch(err => res.json(err))
// })
  
app.use(logger('dev'));
app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 5000;


app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
