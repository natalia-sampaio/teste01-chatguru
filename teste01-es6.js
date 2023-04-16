let copy_quick_answers = document.getElementById('copy_quick_answers');

copy_quick_answers.addEventListener('click', function(e) {
    e.preventDefault();
    let copies = [];
    let user_copy_to = document.getElementById('user_copy_to').value;

    document.querySelectorAll('.copy_quick:checked').forEach(element => copies.push(element.value));

    if (copies.length == 0) {
        alert("Selecione um item para copiar!");
        return false;
    }

    if (user_copy_to == '') {
        alert("Selecione ao menos um destinatário!");
        return false;
    }

    const data = { 'quick_ids': copies, 'user_copy_to': user_copy_to };

    fetch('/quick_answers/copy', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Resultado: " + data.result);
        console.log("Detalhes: " + data.desc);
    });
});