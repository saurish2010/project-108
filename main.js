function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CkixtWxrn/model.json',modelReady);
    

}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
     console.log(error);
    }
    else {
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
    document.getElementById("result_accuracy").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
    img=document.getElementById('alien1');
    img1=document.getElementById('alien2');
    img2=document.getElementById('alien3');
    if (results[0].label=="alien2")
    {
        img.src='https://lh3.googleusercontent.com/MgqsSDXg-JRcKoN_EQE87xUF-VlU37vbO-PBcD1_CIN_djP2kztPa8ZcGI2BH8H-QU_N_W8Uf2t5cukmrRmwtDRb-A=w640-h400-e365-rj-sc0x00ffffff';
        
    }
    
    else if(results[0].label=="alien3")
    {
        
        img1.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBoNNJvvy1fTpGbUI-OCTFC1ZcJ7mJ-13wWw&usqp=CAU';
        
    }
    else 
    {
        
        img2.src='https://www.animeoutline.com/wp-content/uploads/2013/05/anime_ear.jpg';
    }}
    }
