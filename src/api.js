import axios from 'axios';


export const listAllBreeds = async () => {
  const response = await axios.get('https://dog.ceo/api/breeds/list/all', {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};

export const listAllSubBreeds = async (breed) => {
  const response = await axios.get(`https://dog.ceo/api/breed/${breed}/list`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
};

export const searchImagesBreed = async (breed) => {
  const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`, {});

  return response;
};

export const searchImagesSubBreed = async (breed, subBreed) => {
  const response = await axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`, {});

  return response;
};
