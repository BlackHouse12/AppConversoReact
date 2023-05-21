import React from "react";
import 'semantic-ui-css/semantic.min.css'
import { Grid, GridColumn } from "semantic-ui-react";
import Conversor from "./compenents/Conversor";

function App() {
  const gridStyle ={
    padding: "30px 30px"
  }
  return <Grid style={gridStylesnpm } columns={6} centered>
    <Grid.row>
      <Grid.Column>
        <Conversor moedaPrincipal="BTC" moedaDestino="USD">

        </Conversor>
        
      </Grid.Column>

      <Grid.Column>
        <Conversor moedaPrincipal="BTC" moedaDestino="BRL">

        </Conversor>
        
      </Grid.Column>

    </Grid.row>
   </Grid>;
}

export default App;
