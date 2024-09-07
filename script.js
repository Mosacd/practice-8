

const shareButton = document.getElementById('shareButton');
const shareSvg = document.getElementById('shareSvg');
const profileDiv = document.getElementById('profileDiv');
const michellPic = document.getElementById('michellPic');
const publishName = document.getElementById('publishName');
const sharedata = document.getElementById('sharedata');
const triangle = document.getElementById('triangle');



window.addEventListener("resize", function() {
        if(window.innerWidth >= 1000 &&  profileDiv.classList.contains('classforcolorchange')){
            profileDiv.classList.remove('classforcolorchange');
            michellPic.style.visibility = 'visible';
                publishName.style.visibility = 'visible';
                sharedata.style.visibility = 'hidden';
                sharedata.style.display = 'none';
                shareSvg.style.fill = '#6E8098';
            shareButton.style.backgroundColor = 'hsl(210, 46%, 95%)';
            setTimeout(() => {
                sharedata.style.display = 'flex';
            }, 50);
        } else if(window.innerWidth <= 1000 && sharedata.classList.contains('classforsharedata')) {
            sharedata.classList.remove('classforsharedata')
                sharedata.style.visibility = 'hidden';
                shareSvg.style.fill = '#6E8098';
                shareButton.style.backgroundColor = 'hsl(210, 46%, 95%)';
                sharedata.style.display = 'none';
                setTimeout(() => {
                    sharedata.style.display = 'flex';
                }, 50);
        }
    }    
);


shareButton.addEventListener('click',() => {
    if(window.innerWidth < 1000){
        profileDiv.classList.toggle('classforcolorchange');
        if(profileDiv.classList.contains('classforcolorchange')){
        michellPic.style.visibility = 'hidden';
        publishName.style.visibility = 'hidden';
        sharedata.style.visibility = 'visible';
        shareSvg.style.fill = '#FFF';
        shareButton.style.backgroundColor = 'hsl(214, 17%, 51%)'
        sharedata.style.opacity = '1';
        } else {
                sharedata.style.opacity = '0';
                michellPic.style.visibility = 'visible';
                publishName.style.visibility = 'visible';
                sharedata.style.visibility = 'hidden';
                shareSvg.style.fill = '#6E8098';
                shareButton.style.backgroundColor = 'hsl(210, 46%, 95%)'
        }
    } else if(window.innerWidth >= 1000){
        sharedata.classList.toggle('classforsharedata');
        if(sharedata.classList.contains('classforsharedata')){

            setTimeout(() => {
                sharedata.style.opacity = '1';
            }, 50);
            
            shareSvg.style.fill = '#FFF';
            shareButton.style.backgroundColor = 'hsl(214, 17%, 51%)'
            sharedata.style.visibility = 'visible';
            triangle.style.opacity = '1';
           
        } else{
                sharedata.style.opacity = '0';
        setTimeout(() => {
            sharedata.style.visibility = 'hidden';
        }, 300);
           shareSvg.style.fill = '#6E8098';
            shareButton.style.backgroundColor = 'hsl(210, 46%, 95%)'
            triangle.style.opacity = '0';
        }
        
    }
}
)


