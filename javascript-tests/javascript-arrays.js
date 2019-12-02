window.onload = () => {

    const numbersAction = document.getElementById('numbers-action');
    const numbersDisplay = document.getElementById('numbers-display');

    numbersAction.onclick = function() {
        numbersDisplay.innerHTML = "";
        array.numbers.forEach(number => elfCode.appendToList(numbersDisplay, number))
    }

    const array = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]
    };

    const languageNamesAction = document.getElementById('tech-language-names-action');
    const languageNamesDisplay = document.getElementById('tech-language-names-display');

    languageNamesAction.onclick = function (){
        languageNamesDisplay.innerHTML = "";
        languageArray.language.forEach(thing => elfCode.appendToList(languageNamesDisplay, thing))
    }

    const languageArray = {
        language: ['JavaScript','HTML','CSS','Java','C#','Python','C/C++']
    };

    const techLanguagePopularityAction = document.getElementById('tech-language-popularity-action');
    const techLanguagePopularityDisplay = document.getElementById('tech-language-popularity-display');

    techLanguagePopularityAction.onclick = function() {
        techLanguagePopularityDisplay.innerHTML = "";
        popularLanguages.forEach(language => elfCode.appendToList
            (techLanguagePopularityDisplay, language.language + " " + language.rank));
    }

    const popularLanguages=[
        {
            language: 'JavaScript',
            rank: 'rank' + ": " + 1,
            sayLR: function () {
                const languageAndRank= this.language + " " + this.rank;
                console.log(languageAndRank);
                return languageAndRank;
            }
        },
        {
            language: 'HTML',
            rank:  'rank' + ": " + 2,
            sayLR: function () {
                const languageAndRank= this.language + " " + this.rank;
                console.log(languageAndRank);
                return languageAndRank;
            }
        },
        {
            language: 'CSS',
            rank: 'rank' + ": " + 3,
            sayLR: function () {
                const languageAndRank= this.lang + " " + this.rank;
                console.log(languageAndRank);
                return languageAndRank;
            }
        }
    ]

    function compareRank(a, b) {
        const rankA = a.rank;
        const rankB = b.rank;

        let comparison = 0;
    if (rankA > rankB) {
        comparison = 1;
    } else if (rankA < rankB) {
        comparison = -1;
    }
    return comparison;
    }

    const elfCode = {
        appendToList: (list, value ) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    }
}
