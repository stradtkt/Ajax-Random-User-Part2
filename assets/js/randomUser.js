$(function() {

  var url = 'https://randomuser.me/api/?results=12&nat=us';

  $.ajax({
    url: url,
    dataType: 'json',
    success: function(data) {
      var peopleHTML;
      $.each(data.results, function(i, profile) {
        peopleHTML = '<td class="employee-profile">';
        peopleHTML += '<img class="user-image" src="'+profile.picture.large+'">';
        peopleHTML += '<p id="selection"></p>';
        peopleHTML += '<i class="far fa-user"></i>';
        peopleHTML += '<p class="hidden">Hi, my name is, <br/>'+profile.name.first+' '+profile.name.last'</p>';
        peopleHTML += '<i class="far fa-envelope"></i>';
        peopleHTML += '<p class="hidden">My email is, <br/>'+profile.email+'</p>';
        peopleHTML += '<i class="far fa-calendar-alt"></i>';
        peopleHTML += '<p class="hidden">My Birthdate is, <br/>'+profile.dob+'</p>';
        peopleHTML += '<i class="far fa-map"></i>';
        peopleHTML += '<p class="hidden">My Address is, <br/>'+profile.location.street+'<br/> '+profile.location.city+'</p>';
        peopleHTML += '<p class="hidden">'+profile.location.state+' '+profile.location.postcode+'</p>';
        peopleHTML += '<i class="far fa-phone"></i>';
        peopleHTML += '<p class="hidden">My Phone Number is, <br/>'+profile.phone+'</p>';
        peopleHTML += '<i class="far fa-lock"></i>';
        peopleHTML += '<p class="hidden">My username is,'+profile.login.username+'<br/> My password is, '+profile.login.password+'</p>';
        $('#randomItem').append(peopleHTML);
      });
    }
  });

});
