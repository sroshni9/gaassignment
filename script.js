var imagename = ""
var days31 = [1,3,5,7,8,10,12]
var days30 = [4,6,9,11]
function change_year()
{
    let x = document.getElementById("year");
    let d = new Date();
    for (var i = 1930, j=1;i<=d.getFullYear();i++, j++)
    {
      var option = document.createElement("option");
      option.text = i;
      option.value = j;
      option.id = "yearoption"
      x.add(option)
    }
}
function change_day()
{
  //get selected month
  let m = document.getElementById("month").selectedIndex;
  //get selected month's value
  let y =parseInt(document.getElementsByTagName("option")[m].value);
  d = document.getElementById("day");
  //check for month having 31 days
    if(days31.includes(y))
      {
        for (i = 1;i<=31;i++){
          let option = document.createElement("option");
           option.text = i;
           d.add(option)
        }
      }
    //check for month not having 31 days
    else{
          //check for month having 30 days
          if(days30.includes(y)){
              for (i = 1;i<=30;i++){
              let option = document.createElement("option");
               option.text = i;
               d.add(option)
               }
            }
          //check for Feb
          else{
              let leap;
              let x = document.getElementById("year").selectedIndex;
              //get selected year's value
              let y =parseInt((document.querySelectorAll("#yearoption")[x].text));
              //check if year is a leap year or not
                if (y % 4 == 0)
                {
                  if (y % 100 == 0) {
                      if (y % 400 == 0){leap=1;}
                      else{leap=0;}}
                  else
                    leap=1;
                }
                else{leap=0}
          if (leap==1)
          {
            for (i = 1;i<=29;i++)
            {
              let option = document.createElement("option");
               option.text = i;
               d.add(option)
             }
          }
          else{
            for (i = 1;i<=28;i++){
              let option = document.createElement("option");
               option.text = i;
               d.add(option)}
          }
        }
    }
}
function sendimage()
{
    imagename = document.querySelector('input[name = car]:checked + label>img').getAttribute("src")
var queryString = "?img=" + imagename; 
window.location.href = "thankyou.html" + queryString;
}
function thankyou()
{
    var queryString = decodeURIComponent(window.location.search); //parsing 
    queryString = queryString.substring(1); 
    var queries = queryString.split("=");
    document.querySelector('img').src = queries[1];
    dataLayer.push({'event': 'success'});
}
function validateForm()
{
    var result;
    //check for valid field
    if(validatename() == true && validateemail() == true && validatemobile() == true ){
        result = true;}

    else{result = false;}
    if(result==true)
    {
        dataLayer.push({'event': 'submitclick'});
    }
    return result;
}
function validatename()
{
    let x = document.getElementById("name").value;
    // name field is blank
    if (x == "") 
    {
       alert(x.trim())
      alert("Name must be filled out");
      return false;
    }
    else
    {
        var regex = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
        //check for special symbols
        if(!(regex.test(document.getElementById("name").value)))
        {
            alert("Invalid Name!!")
            return false;
        }
        else{return true;}
    }
}
function validatemobile()
{
    let regex = /^[6-9][0-9]{9}$/
    if(!(regex.test(document.getElementById("mob").value)))
            {
                alert("Invalid Mobile Number!!")
                return false
            }
    else{return true;}
}
function validateemail() 
{
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!(regex.test(document.getElementById("email").value)))
    {
        alert("You have entered an invalid email address!")
        return false;
    }
    else{return true;}
}
