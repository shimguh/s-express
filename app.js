const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	// res.send('Hello World!')
	let myJson = {"Hello": "World"}
	res.json(myJson)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
