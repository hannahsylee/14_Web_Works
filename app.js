$(function() {
    $('#giphy-form').on('submit', async function(evt){
        evt.preventDefault();
        let queryWord = $('#search-term').val();
        // clear the search term
        $('#search-term').val("");

        const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
            params: {
                q: queryWord,
                api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
            }
        })

        getRandomGif(response.data);

    });

    $('#remove-btn').on('click', function(){
        $('.gif-images').empty();
    })
})

function getRandomGif(res){
    let numberOfGifs = res.data.length;
    if(numberOfGifs){
        let randomGifIdx = Math.floor(Math.random() * numberOfGifs);
        // create a new div for this gif
        let newGif = document.createElement('div');
        newGif.classList.add("col-md-4", "col-12", "mb-4", "img-container");

        // create gif image
        let newGifImage = document.createElement('img');
        newGifImage.setAttribute('src', res.data[randomGifIdx].images.original.url);

        newGif.append(newGifImage);
        $('.gif-images').append(newGif);
    }
}
// async function getGif(searchTerm){
//     const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
//         params: {
//             q: searchTerm,
//             api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
//         }
//     })

//     const img = document.querySelector('#gif');
//     img.src = res.data.url;
// }

console.log("Let's get this party started!");