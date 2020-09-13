require('dotenv').config()

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const customerRouter = require('./routes/customers');
const addressRouter = require('./routes/addresses');

const port = process.env.PORT || 3001;
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to database.');
});

const app = express();
app.use(cors());
app.use(express.json());
app.use('/customers', customerRouter);
app.use('/addresses', addressRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});