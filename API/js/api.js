const kanye = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = data => {
   const name = document.getElementById('name')
   name.innerHTML = data.results[0].name.title + ' ' + data.results[0].name.first+ ' ' + data.results[0].name.last;

   const gender = document.getElementById('gender')
   gender.innerHTML= data.results[0].gender
   const city = document.getElementById('city')
   city.innerHTML= data.results[0].location.city
}





