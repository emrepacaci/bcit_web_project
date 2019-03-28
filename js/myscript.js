
  


function submitRecommendation(){

  // Get input values from each of the form elements
  var firstName = document.getElementById("Fname").value;
  var lastName = document.getElementById("Lname").value;
  var comment = document.getElementById("Comment").value;
  if (firstName.length <= 0 || lastName.length <= 0  || comment.length <=0 ){  
    return false;
   } else {
    alert("Thanks for your submission");

   }
  // add a new recommendation to the database using those values
  db.collection("feedback").add({
    FirstName: firstName,
    LastName: lastName,
    Comment: comment
  })
  .then(function(docRef){
      alert('data recieved');
    console.log("Data added")
  })
  .catch(function(error){
      console.log("Error");
  });



}










