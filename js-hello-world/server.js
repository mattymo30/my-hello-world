const express = require('express');

const app = express();

const corsOption = {
    origin: 'https://abc.com',
    optionsSuccessStatus: 200
}

app.use(cors(corsOption));

app.get('/hello', enforceScope('read:hello-world') (req,res) => {
    res.send('Hello, World!');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)

});
