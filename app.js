const circle=document.querySelector(".progress-cirlce");

const loading=document.querySelector(".loading");
let i=0;
const fakeUploadPerc=[0,10,25,60,90,100];

const circumference=circle.getTotalLength();

const interval=setInterval(() => {
    circle.style.strokeDashoffset=circumference-(fakeUploadPerc[i]/100)*circumference;
    loading.innerHTML=fakeUploadPerc[i]+"%";
    i++;
    if(i==fakeUploadPerc.length){
        clearInterval(interval);
        loading.innerHTML="Done";
    }
}, 1000);