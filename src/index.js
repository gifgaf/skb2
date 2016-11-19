function canonize(url){
	const regexp = /(https?:)(\/\/)?((telegram|vk|vkontakte)[^\/]*\/)?([a-zA-Z0-9]*)/;
	const username = url.match(regexp);
	return username;
}



const array = [
"https://telegram.me/skillbranch",
"Https://Telegram.me/skillbranch",
"Https://Telegram.me/SkillBranch",
"//telegram.me/skillbranch",
"http://telegram.me/skillbranch",
"telegram.me/skillbranch",
"skillbranch",
"@skillbranch",
"https://vk.com/skillbranch",
"http://vk.com/skillbranch",
"//vk.com/skillbranch",
"vk.com/skillbranch",
"vk.com/skillbranch?w=wall-117903599_1076",
"vk.com/skillbranch/profile"
];

array.forEach((url) => {
	const username = canonize(url);
	console.log(username);
});