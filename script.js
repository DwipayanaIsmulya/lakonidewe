const sendMail = () => {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_lc5k4p2", "template_rvvnn2o", params)
    .then(alert("Email Sent!"));
};
