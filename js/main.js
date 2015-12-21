// Call our scrollover plugin for our navbar
$('.navbar').scrollover();

$.fn.konami({
  watchFor: [38,38,40,40,37,39,37,39,66,65],
  callback: function() {
    
    var doc = document;
    // the cast and scenery
    var body = doc.body,
        backdrop = doc.createElement("div"),
        cage = doc.createElement("div"),
        scenery = doc.createElement('img'),
        finish_him = doc.createElement('img'),
        death_cat = doc.createElement('div'),
        left_laser = doc.createElement('div'),
        right_laser = doc.createElement('div'),
        death_pop = doc.createElement('div'),
        brap_bubble = doc.createElement('img');


    // adding attributes, mainly ID's
    cage.id         = "cage";
    backdrop.id     = "mk_backdrop";
    scenery.id      = "scenery";
    scenery.src     = "/images/pit_bg.png";
    scenery.alt     = "Mortal Kombat Scenery";
    finish_him.src  = "/images/finish_him_lettering.gif";
    finish_him.alt  = "finish him lettering";
    finish_him.id   = "finish_him";
    death_cat.id    = "death_cat";
    left_laser.id   = "left_laser";
    right_laser.id  = "right_laser";
    death_pop.id    = "death_pop";
    brap_bubble.id  = "brap_bubble";
    brap_bubble.src = "/images/brap_bubble.png";
    brap_bubble.alt = "brap";

    // add our animated class - gives position relative to body
    if ( body.classList ) {
      body.classList.add("konami");
    } 
    else {
       $("body").addClass("konami");
    }
    
    // Just a generic function for removing childnodes
    function removeElement() {
        var i = 0,
            j = arguments.length;

        for ( i; i < j; i++ ) {
          arguments[i].parentNode.removeChild(arguments[i]);
        }
    }   

    // define our laser eyes function
    function laserCat() {
      death_cat.appendChild(left_laser);
      death_cat.appendChild(right_laser);

      killJohnny();
    }

    // Switch johnny so he dies
    function killJohnny() {
      backdrop.appendChild(death_pop);
      
      setTimeout(function() {
        // remove dead johnny and the explosion
        // from the DOM
        removeElement(cage, death_pop);

        left_laser.classList.add("recede");
        right_laser.classList.add("recede");

        setTimeout(function() {
          death_cat.appendChild(brap_bubble);
        });
      }, 1000);



      setTimeout(clearStage, 1300);
    }

    function clearStage() {
      death_cat.classList.add("recede");
      removeElement(left_laser, right_laser);

      setTimeout(function() {
        $(backdrop).fadeOut(1500, function() {
          $(this).remove();
        });
      }, 2000);
    }

    body.appendChild(backdrop);
    backdrop.appendChild(scenery);
    backdrop.appendChild(cage);
    backdrop.appendChild(finish_him);
    backdrop.appendChild(death_cat);

    setTimeout(laserCat, 3000);
  }
});