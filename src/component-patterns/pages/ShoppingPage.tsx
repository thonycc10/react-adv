import {ProductCard} from "../components/ProductCard";

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
            <ProductCard product={ product }/>
          </div>
      </div>
  )
}
