const { response } = require("express");
const express = require("express");
require("dotenv").config();

const port = process.env.PORT;

//Servidor express
const app = express();

//Directorio Público
app.use(express.static("public"));

//Lectura y parseo del body
app.use(express.json());

app.post("/", (req, res = response) => {
  const { nuevaVariable } = req.body;
  try {
    if (!isNaN(nuevaVariable)) {
      let arrayVariables = [0];
      const addVariable = arrayVariables.reduce((a, b) => a + b);
      arrayVariables = addVariable + nuevaVariable;
      //Basicamente lo que intenté hacer sin éxito fue ir guardando los datos
      // de los valores que fueran numéricos en un array para posteriormente sumarlos.
      //Esta parte me consumió la mayor parte del tiempo.
    }
  } catch (error) {
    console.log(error);
  }

  res.json({ ok: true });
});

app.listen(port, () => console.log(`Servidor levantado en puerto ${port}`));
