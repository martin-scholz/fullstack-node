//express ist eine Funktion die wir importieren
const express = require('express');
//die app ist ein Objekt das das alle Properties und Methoden enthält, die man bracht um die app laufen zu lassen
const app = express();
//die app soll auf Port 3001 laufen, möglich alles zwischen 0 und 6553535
app.listen(3002, () => {
    console.log('Server is running on http://localhost:3000');
});
//konstante PORT die den Wert 3002 hat
const PORT = 3002;

app.get('/', (req, res) => {
   console.log("TEsting"); 
    // console.log(req)
    res.send('Hello World!');
});
