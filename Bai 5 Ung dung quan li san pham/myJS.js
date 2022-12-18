
// Vẽ bảng Show
let listProducts = ['Sony Xperia', 'Samsung Galaxy','Nokia 6','Xiaomi Redmi Note 4','Iphone 6s'];
let listSearch = [];
function quantityProducts() {
    document.getElementById('quantity').innerHTML = listProducts.length + ' products'
}
function showTable() {
    let drawTable = '';
    for (i = 0; i < listProducts.length; i++) {
        drawTable += `<tr>
<td style="width: 300px;">${listProducts[i]}</td>
<td><button onclick="editProducts(${i})">EDIT</button></td>
<td><button onclick="deleteStudents(${i})">DELETE</button></td>
</tr>`;
    }
    document.getElementById('drawTable').innerHTML = drawTable;
    quantityProducts()
}

showTable()

// Create
// Nhập thông tin từ ô input -> push vào mảng list product => vẽ lại table
// Nếu người dùng để trống ô input thì ko cho push

function addProducts() {
    let newProduct = document.getElementById('input').value;
    if(newProduct.trim() === '') {
        document.getElementById('validate').innerHTML = 'Please input! Try again!';
    } else {
        document.getElementById('validate').innerHTML = `<span style="color: #4FAF50">Add product success!</span>`;
        document.getElementById('input').value = '';
        listProducts.push(newProduct);
        showTable();
    }
}

// Update: bản chất là gán lại phần tử vào mảng
// Truyền index để sửa theo index. stt của sản phẩm

function editProducts(index) {
    let editProduct = prompt('Enter the product to update ------>' + listProducts[index]);
    if(editProduct.trim() ==='') {
        alert('Please input the product want to update! Try again!')
    } else {
        if(editProduct === listProducts[index]) {
            alert('Please input the product want to update! Try again!')
        } else {
            alert('Update Success!')
            listProducts[index] = editProduct; // gán lại giá trị để sửa
            showTable()
        }
    }
}

// Delete: Xoá phần từ trong mảng
function deleteStudents(index) {
    // Sử dụng thẻ confirm để confirm người dùng có muốn xoá hay không
    let confirmDelete = confirm('Are you sure delete?');
    if(confirmDelete) {
        listProducts.splice(index, 1);  //xoá phần từ theo index trong mảng
        alert('Delete Success!')
        showTable();
    } else {
        showTable();
    }
}

// Search:

function actionSearch() {
//     Nhận value từ ô input, nếu value từ ô input trùng vs 1 hay nhiều các phần tử trong mảng
//     Push vào mảng listSearch
//     Vẽ lại bảng với mảng listSearch
    let productSearch = document.getElementById('input').value;
    if(productSearch.trim() === '') {
        showTable()
    } else {
        listSearch = []; // Reset mảng về rỗng, để tránh lặp lại khi search lần thứ 2 trở đi
        for (let i = 0; i < listProducts.length; i++) {
            if(listProducts[i].toLowerCase().search(productSearch.toLowerCase()) !== -1) {
                listSearch.push(listProducts[i]);
            }
        }
        showListSearch()
    }
}

function quantityProductsSearch() {
    document.getElementById('quantity').innerHTML = listSearch.length +  ' products';
}

function showListSearch() {
    let drawTable = '';
    for (i = 0; i < listSearch.length; i++) {
        drawTable += `<tr>
<td style="width: 300px;">${listSearch[i]}</td>
<td><button onclick="editProducts(${i})">EDIT</button></td>
<td><button onclick="deleteStudents(${i})">DELETE</button></td>
</tr>`;
    }
    quantityProductsSearch()
    document.getElementById('drawTable').innerHTML = drawTable;
}

