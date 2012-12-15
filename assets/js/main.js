$('#connection').click(function(e) {
    $('#temp_form').lightbox_me({
        centered: true, 
        onLoad: function() { 
            $('#temp_form').find('input:first').focus()
            }
        });
    e.preventDefault();
});


/*
function update(stream) {
	document.querySelector('video').src = stream.url;
}

window.addEventListener('DOMContentLoaded', function() {

    var video = document.getElementById('sourcevid');

    console.log(navigator);
    
    window.URL = window.URL || window.webkitURL;
	navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    if (navigator.getUserMedia) {
        //navigator.webkitGetUserMedia('video', successCallback, errorCallback);
        navigator.getUserMedia({audio: true, video: true}, successCallback, errorCallback);
        function successCallback(stream) {
            video.src = window.URL.createObjectURL(stream);
        }
        function errorCallback(error) {
            console.error('An error occurred: [CODE ' + error.code + ']');
            return;
        }
    } else {
        console.log('Native web camera streaming (getUserMedia) is not supported in this browser.');
        return;
    }
}, false);
*/