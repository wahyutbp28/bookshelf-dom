function myFunctionCB() {
    
    var checkBox = document.getElementById("inputBookIsComplete");
    
    var bookSubmit = document.getElementById("bookSubmit");
  
    
    if (checkBox.checked == true){
      bookSubmit.innerHTML="Masukkan Buku ke rak <span> Sudah Selesai Dibaca</span>";
    } else {
      bookSubmit.innerHTML="Masukkan Buku ke rak <span> Belum Selesai Dibaca</span>";
    }
  }


  function resetForm(){
    document.getElementById("inputBookID").value = "";
      document.getElementById("inputBookTitle").value = "";
      document.getElementById("inputBookAuthor").value = "";
      document.getElementById("inputBookYear").value = "";
      document.getElementById("inputBookIsComplete").checked = false;
      document.getElementById("bookSubmit").innerHTML ="Masukkan Buku ke rak <span> Belum Selesai Dibaca</span>";
  
      selectedRow = null;
  
  }


  

  function searchBook() {
    var searchBookTitle = document.getElementById('searchBookTitle').value.toLowerCase();
    var dataBuku = JSON.parse(localStorage.getItem('listItem')) ?? [];
    var filteredBooks = dataBuku.filter(function (value) {
        return value.title.toLowerCase().includes(searchBookTitle);
    });

    // Clear tabel sebelum menampilkan hasil pencarian
    table.innerHTML = '';
    table2.innerHTML = '';

    // Loop melalui hasil pencarian dan tampilkan dalam tabel yang sesuai
    filteredBooks.forEach(function (value, i) {
        if (value.status == "false") {
            table.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
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
        } else {
            table2.innerHTML += `
                <tr>
                    <td>${i + 1}</td>
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
    });
}

// Event listener untuk form pencarian
document.getElementById('searchBook').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah halaman untuk refresh
    searchBook();
});

document.getElementById('searchBook').addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah halaman untuk refresh
  searchBook();
});

// Memanggil fungsi allData() untuk memuat data awal
allData();