txtRoom00.value = '1'
txtFloor00.value = '2'
txtCapacity00.value = '2'
txtOcc100.value = 'yoann'
txtOcc200.value = 'mathias'

    // Load image tags with the name in the input field
    document.querySelectorAll(".actimg").forEach(img => {
        img.src = document.getElementById('txt'+img.id.substring(3)).value
    });
    