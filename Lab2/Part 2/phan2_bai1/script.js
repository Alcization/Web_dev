document.querySelector(".create").onclick = () => {
    createTable();
}

document.querySelector(".addrow").onclick = () => {
    if (!document.querySelector("table")) {
        return alert("Không có bảng để thêm hàng");
    }
    addRow();
}

document.querySelector(".addcol").onclick = () => {
    if (!document.querySelector("table")) {
        return alert("Không có bảng để thêm cột");
    }
    addCol();
}

document.querySelector(".delrow").onclick = () => {
    if (!document.querySelector("table")) {
        return alert("Không có bảng để xóa");
    }

    var row_no = parseInt(document.getElementById("row-del").value);
    var num_row = document.getElementsByTagName("tr").length;
    if (row_no == 0) {
        return alert("Không thể xóa hàng đầu tiên");
    }
    if (num_row == 1) {
        return alert("Không còn hàng để xóa");
    }
    if (row_no < 0 || row_no >= num_row) {
        return alert(
            `Chỉ có thể xóa từ hàng 1 đến hàng ${num_row - 1}`
        );
    }
    delRow(row_no);
}

document.querySelector(".delcol").onclick = () => {
    if (!document.querySelector("table")) {
        return alert("Không có bảng để xóa");
    }

    var col_no = parseInt(document.getElementById("col-del").value);
    var num_col = document.getElementsByTagName("th").length;
    if (num_col == 0) {
        return alert("Không có bảng để xóa");
    }
    if (col_no < 1 || col_no > num_col) {
        return alert(
            `Chỉ có thể xóa từ cột 1 đến cột ${num_col}!`
        );
    }
    delCol(col_no);
};

document.querySelector(".deltable").onclick = () => {
    if (!document.querySelector("table")) {
        return alert("Không có bảng để xóa");
    }
    delTable();
};





function createTable() {
    var tableContainer = document.getElementById('tableContainer');
    var table = document.createElement('table');
    table.classList.add("table-fixed", "mx-auto", "mb-5");
    // Header
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    tr.classList.add("bg-secondary", "text-white");
    for (let i = 0; i < 2; i++) {
        var th = document.createElement('th');
        th.classList.add("px-4", "py-3");
        th.appendChild(document.createTextNode(`Header ${i+1}`));
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);
    // Data
    var tbody = document.createElement('tbody');
    tr = document.createElement('tr');
    tr.classList.add("bg-white");
    for (i = 0; i < 2; i++) {
        var td = document.createElement('td');
        td.classList.add("px-4", "py-3");
        td.appendChild(document.createTextNode(`Hàng 1 cột ${i+1}`));
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    table.appendChild(tbody);
    // Delete previous table before add new table element
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
}

function addRow() {
    var numCol = document.getElementsByTagName("th").length;
    var tbody = document.getElementsByTagName("tbody")[0];
    var numRow = document.getElementsByTagName("tr").length;
    var tr = document.createElement('tr');
    tr.classList.add("bg-white");
    for (var i = 0; i < numCol; i++) {
        var td = document.createElement('td');
        td.classList.add("px-4", "py-3");
        td.appendChild(document.createTextNode(`Hàng ${numRow} cột ${i+1}`));
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}

function addCol() {
    var rows = document.getElementsByTagName("tr");
    var numRow = rows.length;
    var numCol = document.getElementsByTagName("th").length;
    // Apend header cell
    var th = document.createElement('th');
    th.classList.add("px-4", "py-3");
    th.appendChild(document.createTextNode(`Header ${numCol+1}`));
    rows[0].appendChild(th);
    for (var i = 1; i < numRow; i++) {
        var td = document.createElement('td');
        td.classList.add("px-4", "py-3");
        td.appendChild(document.createTextNode(`Hàng ${i} cột ${numCol+1}`));
        rows[i].appendChild(td);
    }
}

function delRow(row_no) {
    var rows = document.getElementsByTagName("tr");
    rows[row_no].remove();
}

function delCol(col_no) {
    var rows = document.getElementsByTagName("tr");
    var num_row = rows.length;
    // Delete Header
    rows[0].getElementsByTagName("th")[col_no - 1].remove();
    // Delete data
    for (var i = 1; i < num_row; i++) {
        rows[i].getElementsByTagName("td")[col_no - 1].remove();
    }
}

function delTable() {
    var table = document.getElementsByTagName('table')[0];
    table.remove();
}