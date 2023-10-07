    //method mendapatkan semua data
    function allData(){
            
        table.innerHTML = ``
        table2.innerHTML = ``  //tambahan
        dataBuku = JSON.parse(localStorage.getItem('listItem')) ?? []
    
        //looping data and show data in table
        dataBuku.forEach(function (value, i){
           
            var table = document.getElementById('table')
            var table2 = document.getElementById('table2') //tambahan
            
            if(value.status=="false"){
            table.innerHTML += `
                <tr>
                    <td>${i+1}</td>
                    <td>${value.title}</td>
                    <td>${value.author}</td>
                    <td>${value.year}</td>
                    <td>${value.status}</td>
                    <td>
                        <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                            <i class="fa fa-edit"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>`
        }
        else
        {
            table2.innerHTML += `
                <tr>
                    <td>${i+1}</td>
                    <td>${value.title}</td>
                    <td>${value.author}</td>
                    <td>${value.year}</td>
                    <td>${value.status}</td>
                    <td>
                        <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                            <i class="fa fa-edit"></i>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-danger" onclick="removeData(${value.id})">
                            <i class="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>` 
        }}
        )
    }


    

