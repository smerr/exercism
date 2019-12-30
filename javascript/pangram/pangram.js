//Determine if a sentence is a pangram. A pangram
//is a sentence using every letter of the alphabet at least once.
//The best known English pangram is: The quick brown fox jumps over the lazy dog.
export const isPangram = string => {
	const sentence = string.toLowerCase().trim();

	if (!string) {
		return false;
	}

	const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

	return new Set(sentence.match(letters)).size >= 26;

	//let bool = true;

	//letters.forEach(letter => {
	//if (!sentence.includes(letter)) {
	//bool = false;
	//}
	//});

	//return bool;
};
