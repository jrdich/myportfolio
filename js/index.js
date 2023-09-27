function SendMail() {
  var params = {
    from_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_doo2z3j", "template_l7fnmps", params)
    .then(function (res) {
      alert("Success!" + res.status);
    });
}
