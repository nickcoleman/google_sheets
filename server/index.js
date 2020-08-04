const {google} = require('googleapis');
const express = require('express');
const moment = require('moment')
const cors = require('cors');


const port = process.env.PORT || 4000;

const keys = require('./keys.json');

const app = express();
app.use(cors())


app.post('/', async (req, res) => {
  console.log("req ", req.body);

  let info

  const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
    'https://www.googleapis.com/auth/spreadsheets',
  ]);

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
    const now = moment().format("MMM DD, YYYY HH:MM")
    const updateOptions = {
      spreadsheetId: keys.spreadsheet_id,
      range: 'Data!A1',
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'USER_ENTERED',
      includeValuesInResponse: true,
      resource: {values: [ [
        "first",
        "second",
        "f@s.com",
        "fs comment",
        now
      ] ]},
    };

    try {
      info = await gsapi.spreadsheets.values.append(updateOptions)
      // console.log('****** info', info)
      res.status(200).send(info)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  };
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});