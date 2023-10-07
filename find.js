
function find(id){
    
    dataBuku = JSON.parse(localStorage.getItem('listItem')) ?? []

    
    dataBuku.forEach(function (value){
        
        if(value.id == id){
            var cibi = document.getElementById('inputBookIsComplete');
            
           document.getElementById('id').value = value.id
           document.getElementById('inputBookTitle').value = value.title
           document.getElementById('inputBookAuthor').value = value.author
           document.getElementById('inputBookYear').value = value.year
           document.getElementById('inputBookIsComplete').value = value.status
           if (value.status=="true")
           {cibi.checked=true;}
           

        }
    })
}