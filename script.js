let away_count = 0
let home_count = 0

document.getElementById("home-count").innerText = home_count
document.getElementById("away-count").innerText = away_count


function add1_home(){
    home_count += 1
    document.getElementById("home-count").innerText = home_count
    console.log(home_count)
}

function add2_home(){
    home_count += 2
   document.getElementById("home-count").innerText = home_count
    console.log(home_count)
}

function add3_home(){
    home_count += 3
    document.getElementById("home-count").innerText = home_count
    console.log(home_count)
}



function add1_away(){
    away_count += 1
     document.getElementById("away-count").innerText = away_count
    console.log(away_count)
}

function add2_away(){
    away_count += 2
   document.getElementById("away-count").innerText = away_count
    console.log(away_count)
}
function add3_away(){
    away_count += 3
   document.getElementById("away-count").innerText = away_count
    console.log(away_count)
}