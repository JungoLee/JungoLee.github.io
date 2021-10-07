const express = require('express');
const app = express();
const PORT = process.env.port || 9090;

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})