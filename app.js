// console.log("Let's get this party started!");
const $search = $('#searchInput')
const $gifArea = $('#gif');


function addGif(res){
    let resultLength = res.data.length;
    if(resultLength){
        let randomIdx = Math.floor(Math.random()* resultLength);
        let $newGif = $('<img>', {src: res.data[randomIdx].images.original.url});
        $gifArea.append($newGif);
    }
}

$('form').on('submit', async function(e){
    e.preventDefault();

    let searchTerm = $search.val();
    $search.val('');

    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {q: searchTerm, api_key: 'C49RNGtko31GCnFX18Fqj4lAtshLMegq'}
        
    });
    addGif(response.data);
    // console.log(response)
});

$('#remove').on('click', function(){
    $gifArea.empty();
});