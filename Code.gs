function fetchData() {
  var url = "https://script.google.com/macros/s/AKfycbykG3sBEbkdNnHw1-5SzgXws-gBB2Hgi2PDT44R4vZ8SvFBRWo/exec?callback=renderEvents"
  var res = UrlFetchApp.fetch(url)
  eval(res.getContentText());  
}


function renderEvents(events){
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();   
  body.clear();
  var style = {};
  style[DocumentApp.Attribute.FONT_SIZE] = 32;  
  
  var title = body.appendParagraph("Upcoming Events");
  title.setAttributes(style)
  
  style[DocumentApp.Attribute.FONT_SIZE] = 16; 
  var p = body.appendParagraph("\n")   
  p.setAttributes(style)
  for(var d in events){
    var p  = body.appendParagraph(d);
    p.setAttributes(style)
    body.appendHorizontalRule();     
    for(var e in events[d]){
      var p = body.appendParagraph(events[d][e].startTime + "-" + events[d][e].eventName);
      p.setAttributes(style)
    }     
    body.appendParagraph("\n");
  }
}
