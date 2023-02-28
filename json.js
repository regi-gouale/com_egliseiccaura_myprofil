const surveyJson = {
    elements: [{
        name: "FirstName",
        title: "Entrez votre prénom :",
        type: "text"
    }, {
        name: "LastName",
        title: "Entrez votre nom de famille :",
        type: "text"
    }]
};
shuffle(surveyJson.elements);

function shuffle(array){
    array.sort(() => Math.random() - 0.5);
}