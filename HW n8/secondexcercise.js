

$(document).ready(function () {
    $('#myBtn').click(function () {
        let _text = $('#myText').val();
        let _color = $('#myColor').val();
        if (_color === "" || _text === "") {
            alert('please enter valid parameters')
        }
        else {
            let newH1 = document.createElement('h1');
            newH1.innerHTML = (`${_text} ${_color}`)
            $('body').append(newH1);
        }
    });

})
