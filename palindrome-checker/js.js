document.getElementById("check-btn").addEventListener("click", function () {
	let inputText = document.getElementById("text-input").value.trim();
	let resultElement = document.getElementById("result");

	if (inputText === "") {
		alert("Please input a value.");
		return;
	}

	let cleanedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, "");
	let reversedText = cleanedText.split("").reverse().join("");

	resultElement.textContent =
		inputText +
		(cleanedText === reversedText
			? " is a palindrome."
			: " is not a palindrome.");
});