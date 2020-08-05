# Premier Martial Arts Landing pages

## Resources

* [Google Dev Console](https://developers.google.com/sheets/api/quickstart/nodejs)
* [MA SHEET](https://docs.google.com/spreadsheets/d/1Euzr9S1ISkfbf0oqnYNcWE5v_KLb9ZtmCdx_c9k2WoA)
* [Google Scopes](https://developers.google.com/identity/protocols/googlescopes)


## Keys

You'll need to generate a root level keys.json file with the following structure.  If you use multiple sheet files, each would need their own keys.json file.

```
  {
    "type": "service_account",
    "project_id": "",
    "private_key_id": "",
    "private_key": "",
    "client_email": "",
    "client_id": "",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "",
    "spreadsheet_id": ""
  }
```

The keys.json file can be generated from your project cloud.google.com console

