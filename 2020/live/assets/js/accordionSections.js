$('#participantsLink').click(function(e) {
    $('#collapseOne').collapse('show');
    $('#collapseTwo').collapse('hide');  
    $('#collapseThree').collapse('hide');        
});

$('#mentorsLink').click(function(e) {
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('show');  
    $('#collapseThree').collapse('hide');        
});

$('#judgesLink').click(function(e) {
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('hide');  
    $('#collapseThree').collapse('show');        
});