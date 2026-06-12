function startSurprise(){

    document.getElementById("popup").style.display="none";
}

function blowCandles(){

    document.getElementById("cake").innerHTML="🎂";

    document.getElementById("balloons").style.display="block";

    confetti({
        particleCount:250,
        spread:180
    });

    setTimeout(()=>{

        document.getElementById("balloons").innerHTML=
        "💥 💥 💥 💥 💥";

    },3000);

    setTimeout(()=>{

        document.getElementById("balloons").style.display="none";

        document.getElementById("gallery").style.display="block";

        document.getElementById("message").style.display="block";

    },5000);
}