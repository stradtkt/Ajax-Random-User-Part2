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
        peopleHTML += '<div class="selection"></div>';
        peopleHTML += '<i class="far fa-user"></i>';
        peopleHTML += '<p class="hidden name">Hi, my name is, <br/>'+profile.name.first+' '+profile.name.last+'</p>';
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
        changeContent();
        $('#randomItem').append(peopleHTML);
      });
    }
  });

  function changeContent() {
  $('.far.fa-user').hover(function() {
    $(this).css('color', 'white');
    $(this).css('background', 'dodgerblue');
    $(this).css('transition', '0.3s ease-in-out');
  }, function() {
    $(this).css('color', '#000');
    $(this).css('background', 'white');
  });
  $('.far.fa-envelope').hover(function() {
    $(this).css('color', 'white');
    $(this).css('background', 'limegreen');
    $(this).css('transition', '0.3s ease-in-out');
  }, function() {
    $(this).css('color', '#000');
    $(this).css('background', 'white');
  });
  $('.far.fa-calendar-alt').hover(function() {
    $(this).css('color', 'white');
    $(this).css('background', 'purple');
    $(this).css('transition', '0.3s ease-in-out');
  }, function() {
    $(this).css('color', '#000');
    $(this).css('background', 'white');
  });
  $('.far.fa-map').hover(function() {
    $(this).css('color', 'white');
    $(this).css('background', 'red');
    $(this).css('transition', '0.3s ease-in-out');
  }, function() {
    $(this).css('color', '#000');
    $(this).css('background', 'white');
  });
  $('.far.fa-lock').hover(function() {
    $(this).css('color', 'white');
    $(this).css('background', 'gold');
    $(this).css('transition', '0.3s ease-in-out');
  }, function() {
    $(this).css('color', '#000');
    $(this).css('background', 'white');
  });
  $('.far.fa-phone').hover(function() {
    $(this).css('color', 'white');
    $(this).css('background', 'darkorange');
    $(this).css('transition', '0.3s ease-in-out');
  }, function() {
    $(this).css('color', '#000');
    $(this).css('background', 'white');
  });
}



});
