const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};

const btn = document.getElementById('sendBtn');
btn.addEventListener('click', function (event) {
  const email = document.getElementsByName('user_email')[0].value;
  const name = document.getElementsByName('user_name')[0].value;
  const message = document.getElementsByName('user_message')[0].value;

  if ((email !== '') & (name !== '') & (message !== '')) {
    if (validateEmail(email)) {
      btn.innerText = 'Sending...';
      const templateParams = {
        user_name: name,
        user_email: email,
        user_message: message,
      };
      const serviceID = 'default_service';
      const templateID = 'contact_form';

      emailjs.send(serviceID, templateID, templateParams).then(
        () => {
          btn.innerText = 'Send';
          alert('Sent!');
        },
        (err) => {
          btn.innerText = 'Send';
          alert(JSON.stringify(err));
        }
      );
    } else {
      alert('Invalid email');
    }
  } else {
    alert('Please fill all fields');
  }
});
