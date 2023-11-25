

function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oY9h3yP6J/model.json', modelReady);
}


function modelReady(){
    classifier.classify(gotresults);

}
function gotresults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_label").innerHTML = 'Escucho: ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Presición: ' + (results[0].confidence*100).toFixed(2) + "%";
        img_1 = document.getElementById('alien1')
        img_2 = document.getElementById('alien2')
        img_3 = document.getElementById('alien3')
        img_4 = document.getElementById('alien4')
        if (results[0].label == "Ruido de fondo") {
            img_1.src = 'aliens-01.gif';
            img_2.src = 'aliens-02.png';
            img_3.src = 'aliens-03.png';
            img_4.src = 'aliens-04.png';
        }
        
        else if (results[0].label == "campana") {
            img_1.src = 'aliens-01.png';
            img_2.src = 'aliens-02.gif';
            img_3.src = 'aliens-03.png';
            img_4.src = 'aliens-04.png';
        }
        else if (results[0].label == "aplausos") {
            img_1.src = 'aliens-01.png';
            img_2.src = 'aliens-02.png';
            img_3.src = 'aliens-03.gif';
            img_4.src = 'aliens-04.png';
            
        }
        else if (results[0].label == "chasquidos") {
            img_1.src = 'aliens-01.png';
            img_2.src = 'aliens-02.png';
            img_3.src = 'aliens-03.png';
            img_4.src = 'aliens-04.gif';
        }
    }
}