import React, { useState, useEffect } from "react";
import { searchImagesBreed, searchImagesSubBreed } from './api';
import BarraOpciones from './components/BarraOpciones';
import Cards from './components/Cards';
import Paginacion from './components/Paginacion';
import 'lodash.product';
import _ from 'lodash';


function App() {

  const [imagesState, setImages] = useState([]);
  const [imagesSelec, setImagesSelec] = useState([]);
  const numImages = imagesState.length
  const numPerPage = 18

  useEffect(() => {
    if (imagesState && imagesState.length > 0) {
      setImagesSelec(imagesState.slice(0, numPerPage));
    }
  }, [imagesState]);

  const selectSubset = (page) => {
    setImagesSelec(imagesState.slice((page - 1) * numPerPage, numPerPage * page));
  }

  const refreshImages = (e) => {
    if (e[1].length > 0) {
      let cartesian = _.product(e[0], e[1]);
      let promises = [];
      cartesian.forEach(breed => {
        promises.push(searchImagesSubBreed(breed[0], breed[1]));
      })
      const responses = Promise.allSettled(promises);
      responses.then(resp => {
        let images = [];
        resp.forEach(e => {
          if (e.status === "fulfilled" && e.value.status !== "error") {
            e.value.message.forEach(sb => images.push(sb));
          }
        })
        setImages(images)
      })
    } else {
      let promises = [];
      e[0].forEach(breed => {
        promises.push(searchImagesBreed(breed));
      })
      const responses = Promise.all(promises);
      responses.then(resp => {
        let images = [];
        resp.forEach(e => {
          e.message.forEach(sb => images.push(sb));
        })
        setImages(images);
      })
    }
  }



  return (
    <div>
      <h1 className="ui center aligned header mt-3">Dog CEO Challenge</h1>
      <div className="ui container">
        <div className='row'>
          <BarraOpciones onSubmit={(e) => refreshImages(e)} />
        </div>
        <div className='row'>
          <Cards imagenes={imagesSelec} />
        </div>
        <div className='row'>
          <Paginacion numImagenes={numImages} numPerPage={numPerPage} onClick={e => selectSubset(e)} />
        </div>
      </div>
    </div>

  );
}

export default App;
