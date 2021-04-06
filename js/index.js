

document.querySelector("#app").innerHTML = `
    <div>
        <a href="#home">home</a>
    </div>
`

window.addEventListener("hashchange",()=>{
    let hash = document.location.hash
    console.log(hash)
})