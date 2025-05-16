// HTML読み込み完了後の動き
document.addEventListener("DOMContentLoaded", function () {
	const error = document.getElementById("errorMessage");
	const userlist = document.getElementById("userList");
	const loading = document.getElementById("loading");

	// リンクの内容を取得する
	fetch("https://jsonplaceholder.typicode.com/users")
		.then(function (response) {
			return response.json();
		})
		.then(function (users) {
			console.log(users);
			loading.style.display = "none";

			// リスト作成
			for (const user of users) {
				const li = document.createElement("li");
				li.textContent = user.name;
				userList.appendChild(li);
			}
		})

		// エラーの時
		.catch(function (error) {
			console.error("通信エラー:", error);
			const errorMessage = document.getElementById("errorMessage");
			errorMessage.textContent = "データの取得に失敗しました";
		});
});
