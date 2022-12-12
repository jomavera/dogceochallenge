import React from "react";


const Paginacion = (props) => {

    const handleClick = e => {
        props.onClick(parseInt(e.target.innerText))
    }
    
    let numPaginas = Math.ceil(props.numImagenes/props.numPerPage)
    let paginas = []


    for (let ix = 1; ix <= numPaginas; ix++) {
        paginas.push(<li className="page-item" key={`${ix}`}><a className="page-link" id={`pagina-${ix}`} key={`pagina-${ix}`} onClick={e=>{handleClick(e)}}>{ix}</a></li>)
    }

    return (
        <nav aria-label="page navigation">
            <ul className="pagination justify-content-center" id="paginacion" key="1">
                {paginas}
            </ul>
    </nav>)
}

export default Paginacion


// let botonesPaginacion = '';
//     let numPags = Math.ceil(contador/10)
//     for (let index = 1; index<numPags+1;index++){
//         botonesPaginacion += `<li class="page-item"><a class="page-link" id="pagina-${index}">${index}</a></li>`;
//     }
//     paginacion.innerHTML = botonesPaginacion;
//     for (let index = 1; index<numPags+1;index++){
//         var element = document.getElementById(`pagina-${index}`);
//         element.onclick = function(){
//             searchPageCategory(index, 1);
//         }
//     }
//     const addToCart = document.getElementsByClassName('anadirCarro');