function send_data_to_backend(event) {
    // event.preventDefault();

    var fileInput = document.getElementById('file');
    var file = fileInput.files[0];

    var formData = new FormData();
    formData.append('image', file);

    fetch('https://2d-3d.jayantkhanna.in/generate', {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
    })
    // .then(response => response.json()) 
    // .then(data => {
        // ope google.com
        // console.log('Success:', data);
    //     window.open('http://127.0.0.1:8001/plotly', '_blank');
    // })
    // .catch(error => console.error('Error:', error));
    location.href = 'https://2d-3d.jayantkhanna.in/plotly'
    return false
}
