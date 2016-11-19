export default function canonize(url){
	const reg = new RegExp('@?(https?:)?(\/\/)?(www.)?([A-Za-z0-9-]*.([A-Za-z0-9-]*)\/)?(@)?([a-zA-Z0-9._]*)','i');
	const username = url.match(reg)[7];
	return '@'+ username;
}