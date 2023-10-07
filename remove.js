
    function removeData(id){
        dataBuku = JSON.parse(localStorage.getItem('listItem')) ?? []
    
        if(confirm('Apakah kamu yakin ingin menghapus?')){
        dataBuku = dataBuku.filter(function(value){ 
            return value.id != id; 
        }); }
    
        localStorage.setItem('listItem', JSON.stringify(dataBuku))
    
        allData()
    }