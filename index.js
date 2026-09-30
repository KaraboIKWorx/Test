const express = require('express');

const port = 3000
const path = require('path')


const app = express();


app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)

})