import ngrok from 'ngrok';
import { parsedArgs } from './argsParser';

export const getNewIp = async (data : parsedArgs, tokens : string[]) : Promise<string> => {
	for(let i = 0; i < tokens.length; i++) {
		try{
			const url = await ngrok.connect({ proto: data.protocol as ngrok.Ngrok.Protocol, addr: data.port, region: 'eu', authtoken: tokens[i] });
			const newUrl = url.replace('tcp://', '');
			return newUrl;
		}
		catch(_) {
			continue;
		}
	}

	console.log('Could not get a new IP');
	process.exit(1);
};