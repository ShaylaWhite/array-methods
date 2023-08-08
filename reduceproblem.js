const cities = [
    { name: "Tokyo", population: 37400068 },
    { name: "Delhi", population: 28514000 },
    { name: "Shanghai", population: 25582000 },
    { name: "São Paulo", population: 21650000 },
    { name: "Mexico City", population: 21581000 },
    { name: "Cairo", population: 20076000 },
    { name: "Mumbai", population: 19980000 },
    { name: "Beijing", population: 19618000 },
    { name: "Dhaka", population: 19578000 },
    { name: "Osaka", population: 19281000 },
    { name: "New York City", population: 18819000 }
  ];
  
  // Use .reduce() to sum the population of all cities
  const totalPopulation = cities.reduce((total, city) => {
    return total + city.population;
  }, 0);
  
  console.log(totalPopulation); // Output: 251649068
  git