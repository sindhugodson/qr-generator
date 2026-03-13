import inquirer from 'inquirer';
import qr from 'qr-image';
import { writeFileSync, createWriteStream } from 'fs';

const questions = [
  {
    type: 'input',
    name: 'url',
    message: 'Enter the URL to generate QR code:',
  },
];

inquirer.prompt(questions).then((answers) => {
  const url = answers.url;

  // Save the user input to a txt file
  writeFileSync('user-input.txt', url);

  // Generate QR code image
  const qr_png = qr.image(url, { type: 'png' });
  qr_png.pipe(createWriteStream('qr-code.png'));

  console.log('QR code generated and saved as qr-code.png');
  console.log('User input saved to user-input.txt');
});
