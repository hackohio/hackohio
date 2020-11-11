console.log("clicked")

function participants(){
    console.log("participants")
    $('#collapseOne').collapse('show');
    $('#collapseTwo').collapse('hide');  
    $('#collapseThree').collapse('hide');  
}

function mentors(){
    console.log("mentors")
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('show');  
    $('#collapseThree').collapse('hide'); 
}

function judges(){
    console.log("judges")
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('hide');  
    $('#collapseThree').collapse('show');        
}