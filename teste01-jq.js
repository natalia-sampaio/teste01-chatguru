$(document).on('click', '#copy_quick_answers', function (e) {

    e.preventDefault();
    let copies = [];
    let user_copy_to = $('#user_copy_to').val();

    $('.copy_quick:checked').each(function () {
        copies.push($(this).val())
    });

    if (copies.length == 0) {
        alert("Selecione um item para copiar!");
        return false;
    }

    if (user_copy_to == '') {
        alert("Selecione ao menos um destinatário!");
        return false;
    }

    $.post('/quick_answers/copy', { 'quick_ids': copies, 'user_copy_to': user_copy_to }, function (data) {
        console.log("Resultado: " + data.result),
        console.log("Detalhes: " + data.desc)
    });
});