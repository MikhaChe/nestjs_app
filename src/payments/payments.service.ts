import { Injectable } from '@nestjs/common';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

@Injectable()
export class PaymentsService {

  async getDataSpreadsheet(index: number): Promise<[{}]> {
    
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

      const docGoogle = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID, serviceAccountAuth);
      const dataFromSpreadsheet: [{}] = [{}];
      await docGoogle.loadInfo()
      console.log(docGoogle.title);
      
      const sheet = docGoogle.sheetsByIndex[index];
      console.log(sheet.title);
      
      const rows = await sheet.getRows();
    
      rows.forEach(row => {
        dataFromSpreadsheet.push({id: row.get('id'), date: row.get('date'), description: row.get('description'), payment: row.get('payment') });
    
      })
      return dataFromSpreadsheet;
      //console.log(dataFromSpreadsheet);
    }
}
