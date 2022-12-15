import {ProductCard} from '../components/index';
import '../styles/custom-style.css'


const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
      <div >
          <h1>Shopping Page</h1>
          <hr/>
          {/*TODO para añadir styles */}
          <div style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap'
          }}>
              {/* TODO la idea es enviar los datos desde el padre y que de ahi se repartar a cada componente*/}

            <ProductCard product={ product } className="bg-darl">
                <ProductCard.Imagen className="custom-image" />
                <ProductCard.Title className="text-white text-bold" />
                <ProductCard.Button classNmae="custom-button"/>
            </ProductCard>

              <ProductCard product={ product }
                           className="bg-darl"
                           style={{
                               backgroundColor: '#70D1F8'
                           }}
              >
                  <ProductCard.Imagen className="custom-image"
                                      style={{
                                          boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                                      }}
                  />
                  <ProductCard.Title className="text-white text-bold"
                                     style={{
                                         fontWeight: 'bold'
                                     }}
                  />
                  <ProductCard.Button classNmae="custom-button"
                                      style={{
                                          display: 'flex',
                                          justifyContent: 'end'
                                      }}
                  />
              </ProductCard>
          </div>
      </div>
  )
}
