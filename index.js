const inputval=document.getElementById('inputval')
const search =document.getElementById('search')




async function getmeaning(word){
        let res =await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        let data=await res.json()
        console.log(data)
        result=document.querySelector('.result').innerHTML=Object.values(data[0].meanings[0].definitions[0])

}

search.addEventListener('click',()=>{
        getmeaning(inputval.value)
})