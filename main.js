document.querySelector('button').addEventListener('click', getInfo)


function getInfo() {



    let url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay`
    

    fetch(url)
        .then(res => res.json())
        .then(data => {

            console.log(data)
            console.log(data.artists[0].strGenre)
            console.log(data.artists[0].strCountry)
            console.log(data.artists[0].strBiographyFR)



            document.querySelector('h2').innerText = data.artists[0].strGenre
            document.querySelector('h3').innerText = data.artists[0].strCountry
            document.querySelector('h4').innerText = data.artists[0].strBiographyFR

    
            const API_KEY = 'AIzaSyD4fuU8qhgWKvc5Mpr6bymgDhj5ajzMkIQ';
            const sourceLang = 'fr';
            const targetLang = 'en';
            const urlTwo = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=${sourceLang}&target=${targetLang}&q=${data.artists[0].strBiographyFR}`;

            fetch(urlTwo)

                .then(res => res.json())
                .then(data => {

                    console.log(data)
                    console.log(data.data.translations[0])

                    document.querySelector('h5').innerText = data.data.translations[0].translatedText


                })
                .catch(err => {
                    console.log(`error ${err}`)
            });

        })
        .catch(err => {
            console.log(`error ${err}`)
    });


}