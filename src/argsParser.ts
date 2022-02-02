import path from 'path';
import fs from 'fs';

export const argsParser = (args: string[]) : parsedArgs => {
	const strippedArgs = args.slice(2);

	if(strippedArgs.length < 2) {
		console.log('Usage: ngrok.exe [tcp/http/tls] [port] [game] [iconPath (optional)] [broadcast (optional)] [separe ip (optional)]');
		return;
	}

	const parsedArgs : parsedArgs = {
		protocol: getProtocol(strippedArgs[0]),
		port: getPort(strippedArgs[1]),
		game: strippedArgs[2],
		icon: 3 in strippedArgs ? getImage(strippedArgs[3]) : getImage('./images/default.png'),
		separateIp: 4 in strippedArgs ? strippedArgs[4] == 'true' : false,
		broadcast: 5 in strippedArgs ? strippedArgs[5] == 'true' : true,
	};

	return parsedArgs;
};

const getProtocol = (arg : string) : string => {
	const allowed = ['http', 'tls', 'tcp'];
	if(allowed.includes(arg)) return arg;

	console.log(`Protocol ${arg} is not supported.`);
	process.exit(1);
};

const getPort = (arg : string) : number => {
	const port = parseInt(arg);

	if(port < 0 || port > 65535 || isNaN(port)) {
		console.log(`Port ${arg} is not valid.`);
		process.exit(1);
	}

	return port;
};

const getImage = (arg : string) : string => {
	const absPath = path.resolve(arg.replace(new RegExp(/["'`]/g), ''));

	if(!fs.existsSync(absPath)) {
		console.log(`Image ${arg} does not exist.`);
		process.exit(1);
	}

	return fs.readFileSync(absPath, 'base64');
};


export interface parsedArgs {
    protocol: string;
    port: number;
    game: string;
    icon: string;
    broadcast: boolean;
    separateIp: boolean;
}