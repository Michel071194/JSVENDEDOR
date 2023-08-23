
   
  /*SIMULADOR DE STORE O TIENDA ONLINE DE LA NBA DESDE LA PERSPECTIVA DEL VENDEDOR, 
  SE BUSCA PUBLICAR ARTIÍCULOSY QUE EN LA LISTA SE OBSERVEN CARACTERISTICAS
  COMO TALLE, PRECIO, JUGADOR Y TIPO DE PRENDA*/ 

   
 
    class Indumentaria {
        constructor(franquicia, nombreJugador, talle, precio, tipoDePrenda){
          this.franquicia=franquicia;
          this.nombreJugador= nombreJugador;
          this.talle= talle;
          this.precio= precio;
          this.tipoDePrenda=tipoDePrenda;
          this.SumarIva(); 
        }
        SumarIva(){
          this.precio=this.precio*1.18;
        }
      }
      const productosNba=[];


guardar.addEventListener("click", function(){
  
  let indumentaria = new Indumentaria(inputfranquicia.value, inputnomJugador.value, inputtalle.value, inputPrecio.value > 0 ? inputPrecio.value : 100, inputTipoDePrenda.value);
  
  productosNba.push(indumentaria);
  
  const productosNbaJSON = JSON.stringify(productosNba);
 
  localStorage.setItem("productosNba", productosNbaJSON);

  location.reload();
  

})
 
cancelar.addEventListener("click", function(){
    location.reload();
})


 
    
 
 
 
  
 
  

   

    
  
  

        
    
  
      
