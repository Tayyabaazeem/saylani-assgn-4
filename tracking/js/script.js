$(document).ready(function () {
    $('#show-detail').on('click', function () {

        if ($('#ship-detail').is(':visible')) {
            $('#ship-detail').hide('slow');
        }
        else {
            $('#ship-detail').show('slow');
        }
    });
});
