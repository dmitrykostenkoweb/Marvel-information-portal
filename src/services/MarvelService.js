export default class MarvelService {
  __apiBase = "https://gateway.marvel.com:443/v1/public/";
  __apiKey = "apikey=68b310482292c0e47ef058c4cc91e2c9";

  getResource = async (url) => {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };
  getAllCharacters = () => {
    return this.getResource(
      `${this.__apiBase}characters?limit=9&offset=210&${this.__apiKey}`
    );
  };

  getCharacters = (id) => {
    return this.getResource(
      `${this.__apiBase}characters/${id}?${this.__apiKey}`
    );
  };
}
