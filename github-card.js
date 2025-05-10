function make_card(username, rolename){
	let user_card = document.getElementById(username);
	let pic = document.createElement("img");
	let name = document.createElement("b");
	let role = document.createElement("b");
	let url = "https://api.github.com/users/" + username;
	fetch(url)
		.then(res => res.json())
		.then(data => {
			pic.src = data.avatar_url;
			console.log(data.avatar_url);
			name.innerHTML = data.login;
			role.innerHTML = data.login;
		});
	user_card.appendChild(pic);
	user_card.appendChild(name);
}

make_card("sudotto");
make_card("ball15ta");
make_card("migagula");
