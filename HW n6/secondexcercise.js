document.getElementById('submit').onclick = function () {
    var rows = document.getElementById('rows').value
    var columns = document.getElementById('columns').value
    if (rows == "" || rows == null && columns == "" || columns == null)
        alert('Please insert valid number')
    var output = '<table border="1" cellspacing="0" cellpadding="5" class="table">'

    function createTable(rows, columns) {
        for (var i = 1; i <= rows; i++) {
            output = output + '<tr>'
            for (var j = 1; j <= columns; j++) {
                output = output + '<td>' + '<input class="input" type="text" placeholder="Your data goes here">' + '</td>'
            }
            output = output + '</tr>'
        }
        output = output + '</table>'
        document.getElementById('container').innerHTML = output
    }
    createTable(rows, columns)
}