const {google} = require('googleapis');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 4000;

const keys = require('./keys.json');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res
    .status(200)
    .send(
      'MA Server is running -- navigate to http://https://ma-server-285520.wl.r.appspot.com/landing/contact'
    );
});

app.get('/landing', (req, res) => {
  res.send(200).send('Landing Pages');
});

app.post('/landing/contact', (req, res) => {
  const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  const gsapi = google.sheets({version: 'v4', auth: client});

  client.authorize((err, tokens) => {
    if (err) {
      console.error('Error', err);
      return;
    }

    console.log('Connected Successfully');
    gsrun(client);
  });

  const gsrun = async () => {
    const updateOptions = {
      spreadsheetId: keys.spreadsheet_id,
      range: 'Example!A1',
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'USER_ENTERED',
      includeValuesInResponse: true,
      resource: {values: req.body},
    };

    try {
      response = await gsapi.spreadsheets.values.append(updateOptions);
      res.status(200).send(response);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  };
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
