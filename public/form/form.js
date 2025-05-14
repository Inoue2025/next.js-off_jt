const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	// 名前を取得
	const name = document.getElementById("username").value;
	// 年齢を取得
	const age = document.getElementById("age").value;
	// 職業を取得
	const job = document.getElementById("job").value;
	// 自己紹介を取得
	const bio = document.getElementById("bio").value;

	//名前必須
	if (name === "") {
		console.log("名前が未入力");
		document.getElementById("nameError").style.display = "block";
	} else {
		console.log("名前が有効");
		document.getElementById("nameError").style.display = "none";
	}
	// 年齢必須、年齢17歳未満
	if (age === "") {
		console.log("年齢が未入力");
		document.getElementById("ageError").style.display = "block";
	} else if (Number(age) < 18) {
		console.log("年齢が18歳未満");
		document.getElementById("ageYoungError").style.display = "block";
	} else {
		console.log("年齢が有効");
		document.getElementById("ageError").style.display = "none";
	}

	//フォームデータを格納するオブジェクトを定義
	const formDate = {
		name: document.getElementById("username").value,
		age: document.getElementById("age").value,
		job: document.getElementById("job").value,
		bio: document.getElementById("bio").value,
	};
	//バリデーションチェックがない場合にコンソールに出力
	console.log(JSON.stringify(formDate, null, 2));
});
