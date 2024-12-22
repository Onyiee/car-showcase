export async function fetchCars (){
    const headers = {
        
            'x-rapidapi-key': '2789cf511amshcc3dfda42c32052p17cafajsn9e8926a431dc',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        
    } 

const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {headers: headers,});

const result = await response.json();

return result;
}

