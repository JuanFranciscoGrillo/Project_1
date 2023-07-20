const home = document.getElementById('Home');
const form = document.querySelector('form');
const homebtn = document.getElementById('homebtn')
const search = document.getElementById("nav-button");
const searchForm = document.getElementById('search-form');
const searchResult = document.getElementById('search-result');
const searchBox = document.getElementById('search-box');
const showMore = document.getElementById('show-more-btn');
const accesskey = "waEd5vgZpn1pax3zfcObzfUGRl2c8FAL3NutqZasH6M";
                   
let keyword = " ";
let page = 1;

async function searchImages(){
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
  
  const response = await fetch(url);
  const data = await response.json();
  if(page===1){
    searchResult.innerHTML=" ";
  }
   const result = data.results
   
   result.map((result)=>{
    const image = document.createElement('img')
    image.src= result.urls.small;
    const imageLink = document.createElement('a')
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image)
    searchResult.appendChild(imageLink)
   })

   showMore.style.display= "block";
 
}

searchForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  page=1;
  searchImages();

})

showMore.addEventListener('click',()=>{
  page++
  searchImages()
})

search.addEventListener('click',()=>{
 
  home.style.display='none'
  form.style.display='flex'
  searchResult.style.display='grid'
  
})

homebtn.addEventListener('click',()=>{
  home.style.display='flex'
  form.style.display='none'
  showMore.style.display= "none"
  searchResult.style.display='none'
})

/* async function GenderFinder(){
  const url ="https://api.genderize.io?name=";
  const inputname ='bisrat';
  const finalurl =url + inputname;
  const response = await fetch(finalurl);
  const data = await response.json();
  
  const resultgender =document.createElement('h3')
  console.log(data.gender)

  searchResult.appendChild(gender)
}

GenderFinder()**/

var input= document.querySelector("input");
document.querySelector("input").addEventListener("keyup",(e) => {

  //enter button data//

clearOutput();
if (e.which === 13) {
  getData(input.value);
}
});
 document.querySelector("button").addEventListener("click", (e) => {
 clearOutput();
 getData(input.value);
 });
 function getData(input) {
  var APIkey = 'iuZA060Se2QvTirR6OT091agsaBFR7bl'
  var url = "https://api.giphy.com/v1/gifs/search?api_key=iuZA060Se2QvTirR6OT091agsaBFR7bl&q=input=" + input + "&limit=25&offset=0&rating=g&lang=en"
  fetch(url)
  .then((response)=> response.json())
  .then((data) => showData(data.data))
  .catch((e) => {
    console.log(e);
  });
 }
 function showData(data) {
      data.forEach((element) => {
        var src = element.images.fixed_height.url;
        var output = document.querySelector(".output");
        output.innerHTML += "<img src=" + src + " >";
      });
    }
    function clearOutput() {
      var output = document.querySelector(".output");
      output.innerHTML = "";
    }



