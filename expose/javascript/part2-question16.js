let statisctics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for ( const property in statisctics)
{
    if( property[0] === 'r' || statisctics[property] % 2 === 1)
        console.log(property, ": ", statisctics[property] )
}


/* output

redCars :  21
blueCars :  45
raceCars :  5
rareCars :  2

*/