let socket = io();
socket.on('number', (message) => {
    console.log('random number: ' + message);
});

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
        '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.path+'">'+
        '</div><div class="card-content">'+
        '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
        '<div class="card-reveal">'+
        '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
        '<p class="card-text">'+item.desciption+'</p>'+
        '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}

function submitForm() {
    let formData = {};
    formData.title = $('#title').val();
    formData.path = $('#path').val();
    formData.link = $('#link').val();
    formData.description = $('#description').val();
    
    console.log("Form Data Submitted: ", formData);
    postBike(formData);
}

function getBike() {
    $.get('/api/bike', (response) => {
        console.log(response.data);
        if (response.data) {
            addCards(response.data);
        }
    })
}

function postBike(bike) {
    $.ajax({
        url: '/api/bike',
        data: bike,
        type: 'POST',
        success: (result) => {
            console.log(result.data);
            location.reload();
        }
    })
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    getBike();
    $('.modal').modal();
    $('#formSubmit').click(()=>{
        submitForm();
    });
});