import { render, screen,  } from '@testing-library/react';
import { GifGridItem } from '../../src/components/GifGridItem';


describe('Prueba en <GifGridItem />', () => { 

     const title = 'Saitama';
     const url   = 'https://one-punch.com/saitama.jpg'

     test('Debe hacer match con el snapshot Renderizar titulo y cargar url', () => {

          const { container } = render( <GifGridItem title={ title } url={ url } />)
          expect( container ).toMatchSnapshot();

     });

     test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
          render( <GifGridItem title={ title } url={ url } />) ;
          // screen.debug();
          console.log(screen.getByRole("img"))

     });

})