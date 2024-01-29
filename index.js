const emailReciver = "akhsanridho23@gmail.com";

let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let submit = document.getElementById("submit");

function submitForm() {
  name = name.value;
  email = email.value;
  phone = phone.value;
  subject = subject.value;
  message = message.value;

  if ((name = " ")) {
    return alert("Name input fields must be empty!");
  } else if ((email = " ")) {
    return alert("Email input fields must be empty!");
  } else if ((phone = " ")) {
    return alert("Phone input fields must be empty!");
  } else if ((subject = " ")) {
    return alert("Subject input fields must be empty!");
  } else if ((message = " ")) {
    return alert("Message input fields must be empty!");
  }

  const a = document.createElement("a");

  a.href = `mailto:${emailReciver}?subject=${subject}&body=Hello my name ${name}, ${subject}, ${message} `;
  a.target = "_blank";
  a.click();

  let dataObject = {
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  };
  console.log(dataObject);
}
