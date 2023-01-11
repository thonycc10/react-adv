import {ProductCard} from '../components/index';
import '../styles/custom-style.css'
import {useShoppingCart} from "../hooks/useShoppingCart";

// control props
export const ShoppingPage = () => {

    // hooks, siempre debe existir un return para retornar las variables.
    const {products, shoppingCart, onProductCountChange} = useShoppingCart();

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

              {
                  products.map( product => (
                      <ProductCard product={ product }
                                   className="bg-darl"
                                   style={{
                                       backgroundColor: '#70D1F8'
                                   }}
                                   key={product.id}
                                   onChange={(e) => onProductCountChange(e)}
                                   value={shoppingCart[product.id]?.count || 0}
                      >
                          {
                              (mensaje) => (
                                  <>
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
                                  </>
                              )
                          }

                      </ProductCard>
                  ))
              }
          </div>

          <div className="shoping-cart">
              {
                  // TODO para correr objetos
                  Object.entries( shoppingCart ).map( ([key, product]) => (
                      <ProductCard product={product}
                                   className="bg-darl"
                                   style={{
                                       backgroundColor: '#767f80',
                                       width: '100px'
                                   }}
                                   key={key}
                                   value={product.count}
                                   onChange={(e) => onProductCountChange(e)}
                      >
                          {
                              (mensaje) => (
                                  <>
                                      <ProductCard.Imagen className="custom-image"
                                                          style={{
                                                              boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                                                          }}
                                      />
                                      <ProductCard.Button classNmae="custom-button"
                                                          style={{
                                                              display: 'flex',
                                                              justifyContent: 'center'
                                                          }}
                                      />
                                  </>
                              )
                          }
                      </ProductCard>
                  ))
              }
          </div>

          <div>
              <code>
                  {/*TODO no es una arreglo es un mapa o objeto elementar*/}
                  {JSON.stringify(shoppingCart, null, 5)}
              </code>
          </div>
      </div>
  )
}
