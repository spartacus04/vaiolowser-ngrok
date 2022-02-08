import fetch from 'node-fetch';

const { FIREBASE_ID } = process.env;

export const publishIp = async (payload : publishIpPayload) : Promise<void> => {
	await fetch(`https://firestore.googleapis.com/v1/projects/${FIREBASE_ID}/databases/(default)/documents/Vaiolowser-Ngrok-Ips`, {
		method : 'POST',
		body: JSON.stringify(preparePayload(payload)),
	});
};

export interface publishIpPayload {
    ip: string;
    port: string;
    game: string;
    image: string;
    separateIp: boolean;
}

export const getAuthTokens = async () : Promise<string[]> => {
	const res = await fetch(`https://firestore.googleapis.com/v1/projects/${FIREBASE_ID}/databases/(default)/documents/Vaiolowser-Ngrok-Tokens`, {
		method : 'GET',
	});

	const data = (<any>await res.json()).documents;

	const ips = data.map(({ fields } : { fields : any }) => fields.token.stringValue);

	return ips;
};

const preparePayload = (payload : publishIpPayload) : any => {
	return {
		fields : {
			ip : { stringValue : payload.ip },
			port : { stringValue : payload.port },
			game : { stringValue : payload.game },
			image : { stringValue : payload.image },
			separateIp : { booleanValue : payload.separateIp },
		},
	};
};