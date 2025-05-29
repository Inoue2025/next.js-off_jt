// HTML読み込み完了後の動き
document.addEventListener("DOMContentLoaded", () => {
	const error = document.getElementById("errorMessage");
	const userlist = document.getElementById("userList");
	const loading = document.getElementById("loading");

	// リンクの内容を取得する
	fetch("https://jsonplaceholder.typicode.com/users")
		.then((response) => response.json())
		.then((users) => {
			loading.style.display = "none";

			// リスト作成
			for (const user of users) {
				const li = document.createElement("li");
				li.textContent = user.name;
				userList.appendChild(li);
			}
		})

		// エラーの時
		.catch((error) => {
			const errorMessage = document.getElementById("errorMessage");
			errorMessage.textContent = "データの取得に失敗しました";
		});
});
