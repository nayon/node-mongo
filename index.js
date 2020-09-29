const express = require ('express');


const app = express ();

app.get('/', (req, res) => {
    res.send('Thank you for calling me');
})

app.listen(4000, () => console.log('listing to port 4000'))