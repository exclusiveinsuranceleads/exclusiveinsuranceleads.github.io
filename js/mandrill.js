$('#form-submit').click(function(e) {
  e.preventDefault()
  $.ajax({
    type: "POST",
    url: "https://mandrillapp.com/api/1.0/messages/send.json",
    data: {
          'key': "VfhBRDzb5Fa7sS7CkOKS8Q",
      'message': {
              'from_email': "registration@newagent.com",
        'to': [
            {
              'email': "jreid@ofertains.com",
              'type': "to"
            }
        ],
        'auto_text': "true",
        'subject': "New Agent Signup",
        'html': "<p>Name: "+$('#agent-name').val()+"</p>" +
                "<p>Agency: "+$('#agent-agency').val()+"</p>" +
                "<p>Email: "+$('#agent-email').val()+"</p>" +
                "<p>Phone: "+$('#agent-phone').val()+"</p>"
        }
    }
  }).done(function(response) {
      $("form").hide()
      $("div.alert-success").show()
  });
});
