import {ProductCard} from "../components/index";

const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
      <div>
          <h1>Shopping Page</h1>
          <hr/>
          {/*TODO para añadir styles */}
          <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap'
          }}>
              {/* TODO la idea es enviar los datos desde el padre y que de ahi se repartar a cada componente*/}

            <ProductCard product={ product }>
                <ProductCard.Imagen />
                <ProductCard.Title />
                <ProductCard.Button />
            </ProductCard>
          </div>
      </div>
  )
}
