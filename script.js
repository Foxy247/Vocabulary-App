let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};

function addVocabulary(){
    dictionary[germanText.value] = englishText.value;

    germanText.value = '';
    englishText.value = '';

    localStorage.setItem ('dictionary', JSON.stringify(dictionary));
}

function render() {
    vocabularyList.innerHTML += `<li>Test</li> `
}