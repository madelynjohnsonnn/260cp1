document.getElementById("sampleSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("sampleInput").value;
    if (value === "") {
        document.getElementById("sampleResults").innerHTML = "Please restart and provide an answer for the 4th blank.";
     }
    console.log(value);
    var API_KEY = '18747016-bc2b8939c2ffe705cfb8ab55f';
    const url = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + value + "&image_type=photo"; //encodeURIComponent('red roses');
    console.log(url);
    
    fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {

        let results = "";
        results += "<br />"
        results += '<h4>Successfully submitted!</h4>';
        results += "<p>Here is some inspiration from <a href=\"https://pixabay.com\">Pixabay</a>, based on your answer to the last question, to get you started!</p>"
        results += '<table style="width: 100%; border-collapse: collapse; border=0">';
        results += '<tbody><tr><td style="width: 33.3333%;">';
        // console.log(json);

        results += '<img width="100%" src="' + json.hits[0].previewURL + '"/></td>';
        results += '<td style="width: 33.3333%;"><img width="100%" src="' + json.hits[1].previewURL + '"/></td>';
        results += '<td style="width: 33.3333%;"><img width="100%"src="' + json.hits[2].previewURL + '"/></td>';
        results += '</tr></tbody></table>'
        results += '<p><a href="http://madelynjohnson.xyz/lab2quicksnap/home.html">Back to home page</a></p>'

        // results += "</td></tr></tbody></table>";
        document.getElementById("sampleResults").innerHTML = results;
    });
});