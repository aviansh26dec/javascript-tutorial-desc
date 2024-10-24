const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);

    if(height == '' || height <= 0 || isNaN(height)){
        alert('Please enter valid height');
        return false;
    }

    if(weight == '' || weight <= 0 || isNaN(weight)){
        alert('Please enter valid weight');
        return false;
    }
    document.getElementById('result').style.backgroundColor = 'red';
    document.getElementById('result').style.color = 'white';
    document.getElementById('result').style.fontWeight = 'bold';
    document.getElementById('result').innerHTML = 'Result:' + (weight / ((height * height) / 10000)).toFixed(2);
});