
const survey = new Survey.Model(surveyJson);


survey.locale = "fr";

survey.onComplete.add(showProfilePageAndSaveResults);

$(function () {
    $("#surveyContainer").Survey({ model: survey });
});

function showProfilePageAndSaveResults(sender) {
    const profile = determineProfile(sender.data);
    alert(JSON.stringify(profile));
};

function determineProfile(data) {
    let entries = Object.entries(data);

    entries.forEach(function (entry) {
        const p = entry[0].split('-')[0];

        if (profiles[p] !== undefined) {
            profiles[p]['points'] += entry[1];
        }
        if (profileTypes[p] !== undefined) {
            profileTypes[p]['points'] += entry[1];
        }
    });

    for (p in profiles) {
        profiles[p]["average"] = profiles[p]['points'] / profiles[p]['nbQuestions']
    }
    for (p in profileTypes) {
        profileTypes[p]["average"] = profileTypes[p]['points'] / profileTypes[p]['nbQuestions']
    }

    let profileType = Object.keys(profileTypes).reduce((a, b) => profileTypes[a]['average'] > profileTypes[b]['average'] ? a : b);
    let profile = Object.keys(profiles).reduce((a, b) => profiles[a]['average'] > profiles[b]['average'] ? a : b);

    return profile + '-' + profileType;
}

function showProfilePage(profile) {
    // Show the profile
    // ...
}
function saveProfileResults(url, json) {
    // Save the results to the server
    // ...
}
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
