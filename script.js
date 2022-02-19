document.getElementById("submit").addEventListener("click", function(event) {
	chrome.tabs.query(
	{
		active: true,
		currentWindow: true
	}, 
	function(tabs) {

		const button = `document.getElementsByClassName("VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ JsuyRc boDUxc")[1].click()`;

		chrome.tabs.executeScript(tabs[0].id, {code: button}, (res) => {
			const code = `(function getEntries() {
				const entries = document.getElementsByClassName("zWGUib");
				let array = [];
				for (i of entries) {
					array.push(i.innerText);
				}
				document.getElementsByClassName("VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ JsuyRc boDUxc")[1].click()
				return array;
			})()`;

			chrome.tabs.executeScript(tabs[0].id, {code: code}, (res) => {
				const entries = new Set(res[0]);
				for (i of entries) {
					let list = document.getElementById("att");
					let li = document.createElement("li");
					li.innerHTML = i;
					list.appendChild(li);
				}
			});
		});
	}
	)
});