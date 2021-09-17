const accountSid: string = process.env.TWILIO_ACCOUNT_SID || '';
const token: string = process.env.TWILIO_AUTH_TOKEN || '';

export const twilioClient = require('twilio')(accountSid, token);
twilioClient.logLevel = 'debug';
