import $ from "jquery";

$(document).on('modal:after-close', function(event, modal) {
    $.modal.close();
    modal.elm.remove();
});