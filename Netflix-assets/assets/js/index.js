// FOOTER HOME 
    if(document.getElementById("year")) {
    const yearsSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear(); 
    yearsSpan.innerText = currentYear;
    };

// PROFILE CHECKED
    if(document.getElementById('boxchecked1')) {
    const checkedbutton1 = document.getElementById('boxchecked1');
    const checkedIcon1 = document.getElementById('checked1');
    checkedbutton1.addEventListener('click', function() {
    checkedIcon1.classList.toggle('visibility');
        })
    };
    if(document.getElementById('boxchecked2')) {
        const checkedbutton2 = document.getElementById('boxchecked2');
        const checkedIcon2 = document.getElementById('checked2');
        checkedbutton2.addEventListener('click', function() {
        checkedIcon2.classList.toggle('visibility');
        })
    }

    if(document.getElementsByClassName('img-fluid')) {
        const imgScale = document.getElementsByClassName('img-fluid');
        console.log(imgScale);
        const imgScaleArr = Array.from(imgScale);
        if(imgScaleArr.length > 1) {
            for(i=0; i < imgScaleArr.length; i++) {
            imgScale[i].classList.add('scaleimg');
            } 
        }
    } 



