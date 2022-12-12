export const listAllBreeds = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/list/all', {
    method: "GET",
  });

  const data = await response.json()
  return data;
};

export const listAllSubBreeds = async (breed) => {
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/list`, {
    method: "GET",
  });

  const data = await response.json()
  return data;
};

export const searchImagesBreed = async (breed) => {
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`, {
    method:"GET"
  });

  const data = await response.json()
  return data;
};

export const searchImagesSubBreed = async (breed, subBreed) => {
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`, {
    method:"GET"
  });

  const data = await response.json()
  return data;
};
