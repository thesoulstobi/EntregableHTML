const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event) {
  event.preventDefault(); 
  

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden. Por favor, verifícalas.");
    return;
  }

 


  const mensaje = "¡Registro exitoso!\nNombre: " + nombre + "\nApellido: " + apellido + "\nCorreo electrónico: " + email + "\nNúmero de teléfono: " + telefono  + "\nContraseña:" + password + "\nRepetir Contraseña:" + confirmPassword;
  console.log(mensaje);
  alert(mensaje);


});
