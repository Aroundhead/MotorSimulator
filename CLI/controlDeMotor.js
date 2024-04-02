const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function mostrarMenu() {
    const fechaActual = new Date().toLocaleString();
    
    console.clear();
    console.log("Fecha y hora actual: ", fechaActual);
    console.log("Bienvenido a Control de motor");
    console.log("1. Girar motor en sentido horario");
    console.log("2. Girar motor en sentido antihorario");
    console.log("3. Detener motor");
    console.log("4. Salir");
  }
  
  function girarMotorSentidoHorario() {
    console.log("Girando motor en sentido horario");
  }
  
  function girarMotorSentidoAntihorario() {
    console.log("Girando motor en sentido antihorario");
  }
  
  function detenerMotor() {
    console.log("Deteniendo motor");
  }
  
  function main() {
    mostrarMenu();
    readline.question("Ingrese comando para controlar el motor (ingrese 4 para salir): ", (entry) => {
      switch(entry) {
        case "1":
          girarMotorSentidoHorario();
          break;
        case "2":
          girarMotorSentidoAntihorario();
          break;
        case "3":
          detenerMotor();
          break;
        case "4":
          console.log("Saliendo");
          readline.close();
          return;
        default:
          console.log("Comando no válido");
      }
      setTimeout(main, 2000); // Espera 2 segundos antes de mostrar el menú nuevamente
    });
  }
  
  main();
  