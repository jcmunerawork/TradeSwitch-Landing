const { writeFileSync, mkdirSync } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();

const targetPath = './src/environments/environment.ts';

const envFileContent = `
export const environment = {
  emailjs: {
    serviceId: "${process.env['EMAILJS_SERVICE_ID']}",
    templateId: "${process.env['EMAILJS_TEMPLATE_ID']}",
    publicKey: "${process.env['EMAILJS_PUBLIC_KEY']}",
  }
};
`;

mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPath, envFileContent);
console.log(`Output generated at ${targetPath}`);
