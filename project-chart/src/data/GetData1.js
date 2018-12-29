export const getDataApple = URL => {
  fetch(URL).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    console.log(response.json());
    return response.json();
  });
};

export function getDataMicrosoft(URL) {
  fetch(URL).then(response => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  });
}
