
// variables primarias 

let precio = 400000;
let cantidad = 0;


//declaro variables que se relacionan con el html 

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector (".cantidad");
const totalSpan = document.querySelector (".valor-total");

// le asigno al precio inicial por medio de precioSPan el valor de precio.

precioSpan.innerHTML = precio;

// ir cambiando el precio

function actualizarTotal ()
    {
    const total = precio * cantidad;
    totalSpan.innerHTML = total;
}
// botones de sumar y restar

const botonAumenta = document.querySelectorAll ("button") [0];
botonAumenta.addEventListener ("click",function()   
        {cantidad++;
        cantidadSpan.innerHTML = cantidad;
        actualizarTotal ();
        }
                            );

const botonDisminuye = document.querySelectorAll ("button") [1];
botonDisminuye.addEventListener ("click",function()   
    {   if (cantidad>0)
        {cantidad--;
        cantidadSpan.innerHTML = cantidad; //por medio de cantidadSpan le asigno a .cantidad el valor de la variable cantidad.
        actualizarTotal();
        }
    }
                    );
