
let resBtn = document.querySelector('button')

function buttonClicked(){
    console.log('Button clicked')
    axios.get("https://swapi.dev/api/planets/2/").then(res=>{
        for(let i=0; i<res.data.residents.length; i++){
            axios.get(res.data.residents[i]).then(res=>{
                const h2 = document.createElement('h2')
               console.log( res.data.name) 
               h2.textContent = res.data.name
                document.body.appendChild(h2)
            })
        }
    })
        
}


resBtn.addEventListener('click',buttonClicked);


