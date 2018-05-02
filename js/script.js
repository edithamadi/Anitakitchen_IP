
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function() {
  .click(function(event) {
    var emailInput = prompt("").val()


    event.preventDefault();
    alert(emailInput + ",You have successfully subscribed")
    $("").html("subscribe!")

  });
});
