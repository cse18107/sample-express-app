const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('Application is working');
});

app.listen(process.env.PORT || 3003, ()=> {
    console.log(`Server is working on port ${process.env.PORT || 3003}`);
})