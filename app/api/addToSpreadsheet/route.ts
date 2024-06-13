
import { google } from 'googleapis';
import 'dotenv/config';
import { NextResponse } from 'next/server';

type Data = {
    firstName: string;
    email: string;
};

const keyFileContent: string | undefined = process.env.GOOGLE_KEY_FILE;
const spreadsheetId: string | undefined = process.env.SPREADSHEET_ID;

if (!keyFileContent || !spreadsheetId) {
    console.error('Missing environment variables.');
    process.exit(1); // Exit the process if environment variables are missing
}

const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(keyFileContent),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });



export const POST = async (req: Request) => {
    if (req.method === 'POST') {
        try {
            const {
                firstName,
                email
            } = await req.json();

            const data: Data = { firstName: firstName || "", email: email || '' };
            const range = 'Sheet1!A1:B1';
            const valueInputOption = 'RAW';
            const resource = {
                values: [
                    [data.firstName, data.email],
                ],
            };
            const response = await sheets.spreadsheets.values.append({
                spreadsheetId: spreadsheetId,
                range: range,
                valueInputOption: valueInputOption,
                requestBody: resource,
            });
            return NextResponse.json("Data added to spreadsheet");

        } catch (error) {
            console.error('Error adding data to spreadsheet:', error);
            return NextResponse.json("Error adding data to spreadsheet");

        }
    } else {
        return NextResponse.json("Error adding data to spreadsheet");

    }
};
