$(document).ready(function() {

    $("#btn").on("click", function() {
      
      var backgroundColor = `rgb($(Math. floor(Math. random() * 190)),$(Math. floor(Math. random() * 190)),$(Math. floor(Math. random() * 190)))`;
      
      $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(json) {
        
        var quote = json.quoteText;
        
        if (json.quoteAuthor) {
          var author = json.quoteAuthor;
        } else {
          var author = "Unknown";
        }
        
        $(".quote").html(quote);
        $(".author").html("- " + author);
        
        $("body").css("background-color", backgroundColor);
        $(".quote").css("color", backgroundColor);
        $(".author").css("color", backgroundColor);
        $("i").css("color", backgroundColor);
      });

      });
  
      $('#tweet-quote').click(function() {
        var tweetQuote = $(".quote").text() + " " + $(".author").text();
        if (tweetQuote.length > 140) {
          alert("Sorry, you can't tweet this quote. It is longer than 140 charachters")
        } else {
        window.open("https://twitter.com/intent/tweet?text=" + tweetQuote);
        }
      }
    );
  
    });

    

  
