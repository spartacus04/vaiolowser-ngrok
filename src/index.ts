import dotenv from 'dotenv';
dotenv.config();

import { argsParser } from './argsParser';
import { getAuthTokens, publishIp, publishIpPayload } from './firebase';
import { getNewIp } from './ngrok';

(async () => {
	const args = argsParser(process.argv);

	const url = await getNewIp(args, await getAuthTokens());
	console.log(url);

	if(!args.broadcast) return;

	const payload : publishIpPayload = {
		ip: url.split(':')[0],
		port: url.split(':')[1],
		game: args.game,
		image: args.icon,
		separateIp: args.separateIp,
	};

	await publishIp(payload);
})();