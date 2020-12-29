let mainControllers = {
  index: function (req, res, next) {
    res.render('index');
  },
};
//   search: function (req, res) {
//     let palabraBuscada = req.query.homeSearch;

//     let productos = [
//       { id: 1, name: 'Botines' },
//       { id: 2, name: 'Zapatillas' },
//       { id: 3, name: 'Remeras,' },
//       { id: 4, name: 'Pelotas' },
//       { id: 5, name: 'autos' },
//       { id: 6, name: 'casas' },
//     ];
//     let palabraBuscadaResultado = [];

//     for (let i = 0; i < productos.length; i++) {
//       if (productos[i].name.includes(palabraBuscada)) {
//         palabraBuscadaResultado.push(productos[i]);
//       }
//     } /* NO ME ESTARIA BUSCANDO DENTRO DE ESTOS PRODUCTOS. ALGO ME FALLA EN LA VISTA. ESTO ESTA BIEN, CASI SEGURO */
//     res.render('resultadoBusqueda', { palabraBuscadaResultado: palabraBuscadaResultado });
//   },

//   suscribe: function (req, res) {
//     let suscripcionEmail = {
//       email: req.body.mailSuscribe /* ESTA PARTE ME GENERA DUDAS. ESTA BIEN COMO GUARDO EL DATO? */,
//     };
//     res.render('thankYou');
//   },
// };

module.exports = mainControllers;
