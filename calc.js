let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener('click', function () {
        if (box.innerHTML === '=')
            document.getElementById("result").innerHTML = eval(document.getElementById("result").innerHTML);
        else if (box.innerHTML === '&lt;=')
            document.getElementById("result").innerHTML = (document.getElementById("result").innerHTML).slice(0, -1);
        else if (box.innerHTML === 'C')
            document.getElementById("result").innerHTML = '';
        else
            document.getElementById("result").innerHTML += box.innerHTML;
    })
})