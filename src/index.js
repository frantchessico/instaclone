const express = require('express');
const mongoose = require('mongoose');






const app = express();

mongoose.connect(
     'mongodb+srv://savanapoint:Luisa@jaime1996@cluster0-jrhmu.mongodb.net/instaclone?retryWrites=true&w=majority',
     {
         useNewUrlParser: true,
         useUnifiedTopology: true
     }
).then(data => {
    console.log('on')
}).catch(err => console.log(err))

const port = process.env.PORT || 4200;


const routes = require('./routes');
app.use(routes)


app.listen(port, () => {
    console.log(`Server on port ${port}`);
});