// FOOTER HOME 
    if(document.getElementById("year")) {
    const yearsSpan = document.getElementById("year");
    const currentYear = new Date().getFullYear(); 
    yearsSpan.innerText = currentYear;
    };

    if(document.getElementsByClassName('img-fluid')) {
        const imgScale = document.getElementsByClassName('img-fluid');
        console.log(imgScale);
        const imgScaleArr = Array.from(imgScale);
            for(i=0; i < imgScaleArr.length; i++) {
            imgScale[i].classList.add('scaleimg');
            } 
        
    } 



