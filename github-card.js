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
			role.innerHTML = rolename;
		});
	user_card.appendChild(pic);
	user_card.appendChild(name);
	user_card.appendChild(role);
}

make_card("sudotto", "program");
make_card("ball15ta", "program";
make_card("migagula", "program";
