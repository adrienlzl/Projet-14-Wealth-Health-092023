// $(document).ready(function() {
import $ from "jquery";

$(document).on('modal:after-close', function(event, modal) {
    $.modal.close(); // Fermez la modal
    modal.elm.remove(); // Supprimez la balise du DOM après la fermeture de la modal.
});