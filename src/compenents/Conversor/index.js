import React,{useState} from 'react'
import { Card, Form, Input, Button } from 'semantic-ui-react'


export default function ({moedaPrincipal, moedaDestino }) {
    const{Loading, setLoading} = useState(false);
    const{Valor, setValor} = useState(0);
    const{Cotacao, setCotacao} = useState(0);

    const mudarValor = function(e,{value}){
      setValor(value);
    };

    const convert = async function(){
      setLoading(true);
      const url ='http://free.currcony.com/api/v7/convert?q=${moedaPrincipal}_${moedaDestino}&compact=ultra&apiKey=ecddbf4696186cd43208';

      const response = await fetch(url);

      const result = await response.json();


      setLoading(false);
      setCotacao(result['${moedaPrincipal}_${moedaDestino}'])
    }
  return 
    <Card>
      <Card.Content>

        <Card.Header> converso de moeda</Card.Header>
        <Card.Meta> Cotação Bitcoin: {Cotacao.toFixed(6)} </Card.Meta>
        <Card.Description>
            <Form>

            </Form>
                <Form.Field>
                    <label>{moedaPrincipal}:</label>
                    <Input type="text" placeholder="valor" onChange={mudarValor} value={Valor}></Input>
                </Form.Field>

                <Form.Field>
                  <label>{moedaDestino}:</label>
                  <label>{(Valor*Cotacao).toFixed(6)}</label>
                </Form.Field>

        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Button color="blue" fluid loading={Loading} disabled={Loading} onClick={convert}>
          Converter
        </Button>
      </Card.Content>
    </Card>;
};
