function checkNum(num) {
    if(num < 0 || num == 0){
        return false
    }else {
        return true
    }
}

function checkBMI() {
    let status
    
    const weight = document.getElementById("input-weight").value
    const height = document.getElementById("input-height").value
    if (checkNum(weight) && checkNum(height)){
        const BMI = (weight/Math.pow(height/100,2)).toFixed(1)
        if(BMI <= 18.5){
            status = "Underweight"
        }else if (BMI >= 18.5 && BMI <= 24.9){
            status = "Normal Weight"
        }else if(BMI >=25 && BMI <= 29.9){
            status = "Overweight"
        }else if(BMI >= 30){
            status = "Obesity"
        }else {
            status = "Bruh"
        }
        document.getElementById("result").innerHTML = "Your BMI is <b>" + BMI + "</b> which means You are <b>" + status + "</b>";
    }
}