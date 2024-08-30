document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('image-input');
    const titleInput = document.getElementById('image-title');
    
    if (fileInput.files.length === 0) {
        alert('Please select an image to upload.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.alt = titleInput.value;

        const imageGrid = document.getElementById('image-grid');
        imageGrid.appendChild(imgElement);
        
        titleInput.value = '';
        fileInput.value = '';
    };

    reader.readAsDataURL(fileInput.files[0]);
});
