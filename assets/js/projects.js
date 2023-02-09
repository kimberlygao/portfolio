async function populate() {

  const requestURL = 'assets/projects.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const projects = await response.json();
  

  let div = $(".projects");
  let offset = 3;
  for(let i = 0; i < 6; i++) {
    
    console.log(projects[i])
    var cardDiv = $('<div></div>').addClass("col p-5 mb-5")
    
    var card = $('<div></div>').addClass("card")
    card.append($('<img/>').attr('class', "card-img-top").attr('src', projects[i]["img"]))

    if (projects[i]["url"] == "") {
      card.attr("class", "overlay-card")
      var overlay = $('<div></div>').attr('class', "overlay text")
      overlay.append($('<div></div>').attr('class', "text")).html("coming soon!")
      card.append(overlay)
    }


    var cardBody = $('<div></div>').addClass(`card-body ${projects[i]["color"]}-bg`).append($("<h4></h4>").addClass("card-title").text(projects[i]["name"]))
    var description = $('<p></p>').addClass("card-text").text(projects[i]["description"])
    var tags = $('<p></p>').addClass("card-tag").text(projects[i]["tags"])

    cardBody.append(description)
    cardBody.append(tags)

    // if (projects[i]["url"] != "") {
    //   let anchor = $('<a></a>').attr("href", projects[i]["url"]).attr("target","_blank").attr("rel", "noopener noreferrer")
    //   anchor.append($("<i></i>").addClass("card-link bi bi-box-arrow-up-right text-right pl-1"))
    //   tags.append(anchor)
    // }
      
    
    card.append(cardBody)

    if (projects[i]["url"] != "") {
      var cardAnchor = $('<a></a>').attr("href",projects[i]["url"])
      cardAnchor.append(card)
      cardDiv.append(cardAnchor)
    } else {
      cardDiv.append(card)
    }

    
    // var cardAnchor = $('<a></a>').attr("href",projects[i]["url"])
    // cardAnchor.append(card)
    // cardDiv.append(cardAnchor)
    div.append(cardDiv)
  }

}



// <div class="card card2">
//           <img class="card-img-top" src="assets/img/seattle.png">
//           <div class="card-body text-center">
//             <h6 class="card-title">seattle, wa</h6>
//           </div>
//         </div>