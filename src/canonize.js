export default function canonize(username){
	const reg = new RegExp("@?(https?:)?(\/\/)?((www\.)?([a-zA-Z0-9-\._])[^\/]*\/)?(@)?([a-zA-Z0-9_]*[\.]*[a-zA-Z0-9_]*)");
	const result = username.match(reg)[7];
	return result;
}