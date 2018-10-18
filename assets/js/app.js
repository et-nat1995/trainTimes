var config = {
    apiKey: "AIzaSyCJM4MfFBoj8lxtu1sHvyCS_iVqUCYBaDI",
    authDomain: "trainhomework-c03df.firebaseapp.com",
    databaseURL: "https://trainhomework-c03df.firebaseio.com",
    projectId: "trainhomework-c03df",
    storageBucket: "trainhomework-c03df.appspot.com",
    messagingSenderId: "854502018639"
};
firebase.initializeApp(config);

var database = firebase.database();

// intailizing th values
var trainName = "";
var firstTrain = "";
var frequencyMin = 0;
var Destination = "";
var timeTillTrain;

// needs to be calculated
var nextArriavle;

var database = firebase.database();



$("#add-user").on("click", function (event) {
    event.preventDefault();

    trainName = $("#trianName").val().trim();
    firstTrain = $("#firstTrainTime").val().trim();
    frequencyMin = $("#frequency").val().trim();
    Destination = $("#destination").val().trim();

    // gonna have to do the calculations for the time before this

    timeTillTrain = nextArriavle = 0;

    database.ref().push({
        train: trainName,
        freq: frequencyMin,
        dest: Destination,
        timeTill: timeTillTrain,
        nextArr: nextArriavle
    });

});

database.ref().on("child_added", function (snapshot) {
    
    var snap = snapshot.val();

    renderTableLine(snap);

});

function renderTableLine(snap) {
    var $renderSpot = $("#tbodyRenderSpot");

    var $ourTr = $("<tr>");
    var $train = $("<td>");
    var $nextTrain = $("<td>");
    var $freq = $("<td>");
    var $dest = $("<td>");
    var $minAway = $("<td>");

    $train.attr("id", "name-display");
    $nextTrain.attr("id", "first-display");
    $freq.attr("id", "freq-display");
    $dest.attr("id", "dest-display");
    $minAway.attr("id", "min-display");

    $train.text(snap.train);
    $nextTrain.text(snap.nextArr);
    $freq.text(snap.freq);
    $dest.text(snap.dest);
    $minAway.text(snap.timeTill);

    $ourTr.append($train, $dest, $freq, $nextTrain, $minAway);
    $renderSpot.prepend($ourTr);
}
