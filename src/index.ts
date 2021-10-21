let clave: string = "";
let cantidadintentos: number = 1;

while (clave !== "EUREKA" && cantidadintentos < 4) {
  clave = prompt("Ingrese su clave");
  if (clave === "EUREKA") {
    console.log("Bienvenido");
  } else {
    console.log("Has agotado todos los intentos");
    cantidadintentos++;
  }
}
