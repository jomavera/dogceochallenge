import React from "react";


const Paginacion = (props) => {

    const handleClick = e => {
        props.onClick(parseInt(e.target.innerText));
    }
    
    let numPaginas = Math.ceil(props.numImagenes/props.numPerPage);
    let paginas = [];


    for (let ix = 1; ix <= numPaginas; ix++) {
        paginas.push(<li className="page-item" key={`${ix}`}><a className="page-link" id={`pagina-${ix}`} key={`pagina-${ix}`} onClick={e=>{handleClick(e)}}>{ix}</a></li>);
    }

    return (
        <nav aria-label="page navigation">
            <ul className="pagination justify-content-center" id="paginacion" key="1">
                {paginas}
            </ul>
    </nav>)
}

export default Paginacion;