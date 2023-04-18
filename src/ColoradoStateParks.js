import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return (
    <div>
      <h1>Colorado State Parks!</h1>
      <MesaVerde />
      <p>{trees}</p>
      <p>{wildlife}</p>
      {RMFunctions.elevation()}
    </div>
  );
}

export default ColoradoStateParks;
