const express = require('express')
const app = express()
const port = 3000
const router = require('./router.js');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
router.create(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
