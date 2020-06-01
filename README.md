Este proyecto fue creado con Node JS + Typescript.

## Scripts disponibles

En el directorio del proyecto puedes ejecutar:

### `npm run dev`

Ejecuta la aplicación en modo de desarrollo.<br />
Abre [http://localhost:5000](http://localhost:5000) para verla en el explorador.

### `npm build`

Compila la aplicación para producción en el directorio `build`.<br />

### `npm run test`

Ejecuta las pruebas unitarias de los controladores.<br />

## ¿Dónde puedo ver el proyecto?

Está subido en Heroku, en la siguiente url: [https://av-test-bice-lab-api.herokuapp.com/](https://av-test-bice-lab-api.herokuapp.com/)

## API Structure

La API se encuentra bajo la url base: `/api/indicators` y los métodos disponibles son:

-   `/api/indicators/last` : Método que entrega los ultimos valores de los elementos
-   `/api/indicators/:key/values` : Método que entrega los últimos valores de un elemento en particular. Recibe como parámetro la `key`del elemento. Las keys pueden ser "`cobre|dolar|euro|ipc|ivp|oro|plata|uf|utm|yen`"
