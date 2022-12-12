import React, { useState, useEffect } from "react";
import { listAllBreeds, listAllSubBreeds } from "../api.js";
import { Dropdown } from 'semantic-ui-react'

const BarraOpciones = (props) => {
  const [breeds, setBreeds] = useState([]);
  const [subBreeds, setSubBreeds] = useState([]);
  const [breedSelec, setBreedSelec] = useState([]);
  const [subBreedSelec, setSubBreedSelec] = useState([]);

  useEffect(() => {
    fetchBreedList();
  }, []);

  useEffect(() => {
    if (breedSelec && breedSelec.length > 0) {
      fetchSubBreedList(breedSelec);
    }
  }, [breedSelec]);

  async function fetchBreedList() {
    const response = await listAllBreeds();
    const data = await response.data.message;
    let respBreeds = Object.keys(data).map(e => {
      return {
        key: e,
        text: e,
        value: e,
      };
    });
    setBreeds(respBreeds)
  }

  async function fetchSubBreedList(breeds) {

    if (breeds.length > 0) {
      let promises = [];
      breeds.forEach(breed => {
        promises.push(listAllSubBreeds(breed))
      });
      const responses = Promise.all(promises)

      responses.then(resp => {
        let subBreedsTemp = []
        resp.forEach(e => {
          e.data.message.forEach(sb => subBreedsTemp.push(sb))
        })
        let respSubBreeds = subBreedsTemp.map(e => {
          return {
            key: e,
            text: e,
            value: e,
          }
        })
        setSubBreeds(respSubBreeds)
      })
    }
  }

  const manejarSubmit = (e) => {
    const error = (breedSelec && breedSelec.length > 0) ? false : true
    if (!error) {
      props.onSubmit([breedSelec, subBreedSelec])
    } else {
      alert("Select breed to search for images!");
    }
    e.preventDefault()
  }

  const onSelectBreed = (e, data) => {
    setBreedSelec(data.value)
  }

  const onSelectSubBreed = (e, data) => {
    setSubBreedSelec(data.value)
  }

  return (
    <div>
      <h1> Dog CEO Challenge</h1>
      <form className="ui form">
        <label className="form-check-label">Select Breed</label>
        <div className="field">
          <Dropdown
            placeholder='Breed'
            fluid multiple selection
            options={breeds}
            onChange={(e, data) => onSelectBreed(e, data)}
          />
        </div>
        <label className="form-check-label">Select Sub-Breed</label>
        <div className="field">
          <Dropdown
            placeholder='Sub-Breed'
            fluid multiple selection
            options={subBreeds}
            onChange={(e, data) => onSelectSubBreed(e, data)}
          />
        </div>
        <hr></hr>
        <button type="button" className="ui button" onClick={(e) => manejarSubmit(e)}>
          Search
        </button>
      </form>
    </div>
  );
};

export default BarraOpciones;