const fs = require("fs");

const addMovie = (movieObj) => {
    try {
        const stringobj = JSON.stringify(movieObj);
        fs.writeFileSync("./storage.json", stringobj);
    } catch (error) {
        console.log(error);
    }
    
};

const listMovies = () => {
    //no parameter needed because we're not trying to pass in values
    try {
        const jsonList = fs.writeFileSync("./storage.json");
        const listParser = JSON.parsel(jsonList);
        console.log(listParser)
    } catch (error) {
        console.log(error);

    }
};

module.exports = { addMovie, listMovies } 
