
exports.home=function(req,res){
    res.render('index',{title:"Home"});
}
exports.city=function(req,res){
    var cityName=req.params.city;
    var heading;
    var imagearr=[];
    switch(cityName){
      case "Delhi":
        heading="I aske my sol:what is Delhi? She Replied the World is the body and Delhi its life";
        imagearr=["Delhi1.jpg","Delhi2.jpg"];
        break;
      case "Mumbai":
        heading="More drems are released and extinguished in Bombay, than any other place in india";
        imagearr=["mumbai1.jpg","mubai2.jpg"];
        break;
      case "Chennai":
        heading="Chennai is such a beautiful place to perform in. The city is lovely, and the people, even more so.";
        imagearr=["chennai.jpg","chennai2.jpg"];
        break;
    }
    res.render('city',{
        title:cityName,
        headline:heading,
        Images:imagearr});
  }
