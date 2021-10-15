import dotenv from 'dotenv';
dotenv.config();

import ngrok from 'ngrok';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const { FIREBASE_ID, NGROK_TOKEN } = process.env;

(async () => {
	const args = process.argv.slice(2);
	const [ protocol, port, game ] = args;

	if(!protocol || !port) return;


	let imagePath = path.join(process.cwd(), 'server-icon.png');

	if(!fs.existsSync(imagePath)) imagePath = path.resolve('../images/default.png');

	const image = fs.readFileSync(imagePath, 'base64');


	await ngrok.authtoken(NGROK_TOKEN);


	const url = await ngrok.connect({ proto: protocol as ngrok.Ngrok.Protocol, addr: port, region: 'eu' });

	const newUrl = url.replace('tcp://', '');
	console.log(newUrl);

	const data = {
		ip: { stringValue : newUrl.split(':')[0] },
		port: { stringValue : newUrl.split(':')[1] },
		game: { stringValue : game || 'idk non hanno specificato il nome del gioco' },
		image: { stringValue : image },
	};


	await fetch(`https://firestore.googleapis.com/v1/projects/${FIREBASE_ID}/databases/(default)/documents/Vaiolowser-Ngrok-Ips`, {
		method : 'POST',
		body: JSON.stringify({ fields: data }),
	});
})();