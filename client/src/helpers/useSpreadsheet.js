import {GoogleSpreadsheet} from 'google-spreadsheet';

const useSpreadsheet = async () => {
  const doc = new GoogleSpreadsheet(process.env.REACT_APP_SHEET_ID)
  doc.useApiKey = process.env.REACT_APP_API_KEY;
  console.log("useSpreadsheet -> doc", doc);
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[0]
  return { sheet }
}

export default useSpreadsheet