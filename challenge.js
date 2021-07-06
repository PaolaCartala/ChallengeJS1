// --- CHALLENGE ---
// -- Registro --

alert("Bienvenido al programa");
let register = confirm("Desea registrarse?");
console.log(register);
let nameValidado, passValidada;
if (register) {
  let name = prompt(
    "Ingrese su nombre de usuario, debe tener más de 3 caracteres"
  ).toLowerCase();
  console.log(name);
  while (name.length < 3) {
    alert("El nombre debe tener más de 3 caracteres");
    name = prompt("Ingrese su nombre de usuario").toLowerCase();
  }
  if (name.length > 3) {
    nameValidado = name;
    console.log(`Nombre: ${nameValidado}`);
    let pass = prompt(
      "Ahora ingrese una contraseña, debe tener más de 6 caracteres"
    );
    while (pass.length < 6) {
      alert("La contraseña debe tener más de 6 caracteres");
      pass = prompt("Ingrese una contraseña");
    }
    if (pass.length > 6) {
      passValidada = pass;
      console.log(`Contraseña: ${passValidada}`);
      console.log(`Nombre: ${nameValidado}
Contraseña: ${passValidada}`);
      alert(`Bienvenidx ${nameValidado}, te has registrado correctamente!`);
    }
  }
} else {
  alert("Ok, esperamos tenerte de regreso pronto!");
}

// -- Login --
let sesion;
if (passValidada) {
  sesion = confirm("Desea iniciar sesión?");
  console.log(sesion);
}

if (sesion) {
  let nameSesion = prompt("Ingrese su nombre de usuario").toLowerCase();
  console.log(nameSesion);
  while (nameSesion !== nameValidado) {
    alert("El nombre ingresado es incorrecto");
    nameSesion = prompt("Ingrese su nombre de usuario").toLowerCase();
  }
  if (nameSesion === nameValidado) {
    passSesion = prompt(
      `Bienvenidx ${nameSesion}, ahora ingrese su contraseña`
    );
    while (passSesion !== passValidada) {
      alert("La contraseña es incorrecta");
      passSesion = prompt("Ingrese su contraseña");
    }
    if (passSesion === passValidada) {
      console.log(`Contraseña: ${passSesion}`);
      console.log(`Nombre: ${nameSesion}
Contraseña: ${passSesion}`);
      alert(`Bienvenidx ${nameSesion}, has iniciado sesión correctamente!`);
    }
  }
}
