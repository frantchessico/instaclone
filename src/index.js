const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');






const app = express();

const server = require('http').Server(app);

const io = require('socket.io')(server)

mongoose.connect(
   
     'mongodb+srv://savanapoint:Luisa@jaime1996@cluster0-jrhmu.mongodb.net/instaclone?retryWrites=true&w=majority',
    // 'mongodb://localhost/instaclone',
     {
         useNewUrlParser: true,
         useUnifiedTopology: true
     }
).then(data => {
    console.log('on')
}).catch(err => console.log(err));

app.use((req, res, next) => {
    req.io = io;
    next();
});
app.use(cors());

const port = process.env.PORT || 4200;


const routes = require('./routes');
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(routes)


server.listen(port, () => {
    console.log(`Server on port ${port}`);
});

