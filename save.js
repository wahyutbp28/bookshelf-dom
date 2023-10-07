  
function save(){
    
    dataBuku = JSON.parse(localStorage.getItem('listItem')) ?? []

    var id
    dataBuku.length != 0 ? dataBuku.findLast((item) => id = item.id) : id = 0

    if(document.getElementById('id').value){

        //edit contactlist array based on value
        dataBuku.forEach(value => {
            if(document.getElementById('id').value == value.id){

                var checkBox = document.getElementById("inputBookIsComplete");
                if (checkBox.checked == true){
                    document.getElementById("inputBookIsComplete").value = "true";
                  } else {
                    document.getElementById("inputBookIsComplete").value = "false";
                  }
            
                  

                value.title      = document.getElementById('inputBookTitle').value, 
                value.author       = document.getElementById('inputBookAuthor').value, 
                value.year   = document.getElementById('inputBookYear').value, 
                value.status     = document.getElementById('inputBookIsComplete').value

                if (value.status =="true"){
                    checkBox.checked = true;
                  }
                  else{
                    checkBox.checked =false;
                  }
            }
        });

        //remove hidden input
        document.getElementById('id').value = ''

    }else{

        //save
        //get data from form
        var checkBox = document.getElementById("inputBookIsComplete");
    if (checkBox.checked == true){
        document.getElementById("inputBookIsComplete").value = "true";
      } else {
        document.getElementById("inputBookIsComplete").value = "false";
      }

        var item = {
            id        : id + 1, 
            title      : document.getElementById('inputBookTitle').value, 
            author       : document.getElementById('inputBookAuthor').value, 
            year   : document.getElementById('inputBookYear').value, 
            status     : document.getElementById('inputBookIsComplete').value
        }

        
        dataBuku.push(item)
    }

    // simpan ke local storage
    localStorage.setItem('listItem', JSON.stringify(dataBuku))

    allData()

    document.getElementById('form').reset()
}