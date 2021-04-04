function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.getElementById("resbtn").addEventListener("click", function() {
  window.location = "donate.html"
});

document.getElementById("servbtn").addEventListener("click", function() {
  window.location = "services.html"
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("selected");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        console.log(apiResult);

        document.getElementById('org1name').appendChild(document.createTextNode(apiResult.data[129].attributes.name));
        document.getElementById('org1street').appendChild(document.createTextNode(apiResult.data[130].attributes.street));
        document.getElementById('org1city').appendChild(document.createTextNode(apiResult.data[129].attributes.city));
        document.getElementById('org1state').appendChild(document.createTextNode(apiResult.data[129].attributes.state));
        document.getElementById('org1zip').appendChild(document.createTextNode(apiResult.data[129].attributes.postalcode));
        document.getElementById('org1url').appendChild(document.createTextNode(apiResult.data[129].attributes.url));

        document.getElementById('org2name').appendChild(document.createTextNode(apiResult.data[23].attributes.name));
        document.getElementById('org2street').appendChild(document.createTextNode(apiResult.data[23].attributes.street));
        document.getElementById('org2city').appendChild(document.createTextNode(apiResult.data[23].attributes.city));
        document.getElementById('org2state').appendChild(document.createTextNode(apiResult.data[23].attributes.state));
        document.getElementById('org2zip').appendChild(document.createTextNode(apiResult.data[23].attributes.postalcode));
        document.getElementById('org2url').appendChild(document.createTextNode(apiResult.data[23].attributes.url));

        document.getElementById('org3name').appendChild(document.createTextNode(apiResult.data[30].attributes.name));
        document.getElementById('org3street').appendChild(document.createTextNode(apiResult.data[30].attributes.street));
        document.getElementById('org3city').appendChild(document.createTextNode(apiResult.data[30].attributes.city));
        document.getElementById('org3state').appendChild(document.createTextNode(apiResult.data[30].attributes.state));
        document.getElementById('org3zip').appendChild(document.createTextNode(apiResult.data[20].attributes.postalcode));
        document.getElementById('org3url').appendChild(document.createTextNode(apiResult.data[30].attributes.url));

        document.getElementById('org4name').appendChild(document.createTextNode(apiResult.data[211].attributes.name));
        document.getElementById('org4street').appendChild(document.createTextNode(apiResult.data[211].attributes.street));
        document.getElementById('org4city').appendChild(document.createTextNode(apiResult.data[211].attributes.city));
        document.getElementById('org4state').appendChild(document.createTextNode(apiResult.data[211].attributes.state));
        document.getElementById('org4zip').appendChild(document.createTextNode(apiResult.data[211].attributes.postalcode));
        document.getElementById('org4url').appendChild(document.createTextNode(apiResult.data[211].attributes.url));

        document.getElementById('org5name').appendChild(document.createTextNode(apiResult.data[217].attributes.name));
        document.getElementById('org5street').appendChild(document.createTextNode(apiResult.data[217].attributes.street));
        document.getElementById('org5city').appendChild(document.createTextNode(apiResult.data[217].attributes.city));
        document.getElementById('org5state').appendChild(document.createTextNode(apiResult.data[217].attributes.state));
        document.getElementById('org5zip').appendChild(document.createTextNode(apiResult.data[217].attributes.postalcode));
        document.getElementById('org5url').appendChild(document.createTextNode(apiResult.data[217].attributes.url));

        document.getElementById('org6name').appendChild(document.createTextNode(apiResult.data[106].attributes.name));
        document.getElementById('org6street').appendChild(document.createTextNode(apiResult.data[106].attributes.street));
        document.getElementById('org6city').appendChild(document.createTextNode(apiResult.data[106].attributes.city));
        document.getElementById('org6state').appendChild(document.createTextNode(apiResult.data[106].attributes.state));
        document.getElementById('org6zip').appendChild(document.createTextNode(apiResult.data[106].attributes.postalcode));
        document.getElementById('org6url').appendChild(document.createTextNode(apiResult.data[106].attributes.url));
    }
};
xmlhttp.open('GET', 'https://api.rescuegroups.org/v5/public/orgs/search/?limit=250', true);
xmlhttp.setRequestHeader("Authorization", "f1ErM1rn");
xmlhttp.send();