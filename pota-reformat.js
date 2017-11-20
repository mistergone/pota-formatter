

function reformatIt() {
  var content = document.getElementById("the-text").value,
      arr = [];

  content = content.replace(/\n---/g, "\n!!! ");
  content = content.replace(/---/g, " - ")
  content = title_case( content );
  content = content.replace(/\n!!!/g, "\n<li>");
  content = content.replace(/\n>/g, "\n<li>");
  content = content.replace(/RPG\'s/gi, "RPGs");
  content = content.replace(/mtg/gi, "MTG");
  content = content.replace(/dcc/gi, "DCC");
  content = content.replace(/fnm/gi, "FNM");
  content = content.replace(/sjg/gi, "SJG");
  content = content.replace(/ffg/gi, "FFG");
  content = content.replace(/Ehp/gi, "EHP");
  content = content.replace(/d&d/gi, "D&D");
  content = content.replace(/ccg\'s/gi, "CCGs");
  content = content.replace(/lcg's/gi, "LCGs");
  content = content.replace("Events", "<h3>Events</h3>");
  content = content.replace("Card Games", "<h3>Card Games</h3>");
  content = content.replace("Boardgames", "<h3>Boardgames</h3>");
  content = content.replace("RPGs", "<h3>RPGs</h3>");
  content = content.replace("Games Workshop", "<h3>Games Workshop</h3>");
  arr = content.split('\n');
  content = "";
  for (var x=0; x<arr.length; x++) {
    var line = arr[x].trim();
    content = content + "\n" + line;
    if ( arr[x].substr(0,4) === "<li>" ) {
      content = content + "</li>";
    }
  }

  content += '\n&nbsp;\n\n<a href="https://groups.yahoo.com/neo/groups/potalert/info" target="_blank"><strong>Sign up to receive the PotAlert via email!</strong></a>';
  document.getElementById("display-result").innerHTML = content;

};

function title_case( str ) {
    var lowercasewords = ["a", "an", "and", "as", "at", "by", "for", "in", "of", "on", "or", "the", "to", "with"];
    return str.replace(/\w\S*/g, function(word, pos) {
        if (pos != 0 && lowercasewords.indexOf(word.toLowerCase()) != -1) {
            return word.toLowerCase();    
        }
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
}

window.onload = function() {
  document.getElementById("reformat").onclick = function(){
    reformatIt();
  };
}
