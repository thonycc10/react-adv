import {ProductCard} from '../components/index';
import '../styles/custom-style.css'
import {products} from "../data/products";

// control props
export const ShoppingPageIni = () => {

    // hooks, siempre debe existir un return para retornar las variables.
    const product = products[0];

  return (
      <div >
          <h1>Shopping Page</h1>
          <hr/>
              <ProductCard product={ product }
                           className="bg-darl"
                           style={{
                               backgroundColor: '#4f4d4d'
                           }}
                           initialValues={{
                               count: 4,
                               maxCount: 10
                           }}
              >
                  {
                      // utilizando una forma de destructurar metodos parecido a formik
                      ({reset, isMaxCountReached, increaseBy, count, maxCount} ) => (
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
                              <button onClick={reset}> Reset </button>
                              <button onClick={() => increaseBy(-2)}> -2 </button>
                              {/*utilizar esta forma para las validaciones if */}
                              {
                                  ( !isMaxCountReached && <button hidden={isMaxCountReached} onClick={() => increaseBy(2)}> +2  </button>)
                              }

                              <span> {count}  / {maxCount}</span>
                              {/*{ JSON.stringify(args, null, 3)}*/}
                              {/*funciones de como hijo de un HOC */}
                          </>
                      )
                  }
              </ProductCard>

      </div>
  )
}
