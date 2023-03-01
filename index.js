
const survey = new Survey.Model(surveyJson);

function alertResults(sender) {
    alert(JSON.stringify(sender.data));
};

survey.locale = "fr";

survey.onComplete.add(alertResults);

$(function () {
    $("#surveyContainer").Survey({ model: survey });
});

// function saveSurveyResults(url, json) {
//     const request = new XMLHttpRequest();
//     request.open('POST', url);
//     request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//     request.addEventListener('load', () => {
//         // Handle "load"
//     });
//     request.addEventListener('error', () => {
//         // Handle "error"
//     });
//     request.send(JSON.stringify(json));
// }
