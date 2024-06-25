const APIURL="https://api.github.com/users/";
const main=document.getElementById("main")
const search_txt = document.getElementById('search_txt')
const src_btn = document.getElementById('src_btn')


src_btn.addEventListener('click',async function(){
    console.log(search_txt.value)
    var api = await fetch(`https://api.github.com/users/${search_txt.value}`)
    var data =await api.json()
    console.log(data)
    

const card = `

<div>
<h1>${data.login}</h1>
<img src='${data.avatar_url}'/><br/>
<h4>Followers: </h4><span>${data.followers}</span><br>
<h4>Following: </h4><span>${data.following}</span><br>
<h4>Joined on: </h4><span>${data.created_at}</span><br>
<h4>Url: </h4><span>${data.html_url}</span><br>

</div>

`

main.innerHTML = card












})




