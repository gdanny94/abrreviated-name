function abbrevName(name){

    //we split and make name an array 
    //take the first character from each object in array - map
    //make new array with map 
    //join them as abbreviations.
      
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')  
    }
    
    console.log( abbrevName ('Millie Garcia')) // M.G
    console.log( abbrevName ('Amy Garcia')) // A.G
    console.log( abbrevName ('Sam Hernandez')) // S.H