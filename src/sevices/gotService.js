export default class GotSercive {

    constructor() {
        this._apiBase = 'https://anapioficeandfire.com/api';
        this.page = Math.floor(Math.random()*40 + 5);
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, 
            status ${res.status}`);
        }
        return await res.json();   
    }

    async getAllCharacters() {
        const res = await this.getResource(`/characters?page=${this.page}`);
        return res.map(this._transformCharacter)
    }
    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character)
    }
    getAllHouses() {
        return this.getResource(`/houses`);
    }
    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }
    getAllBooks() {
        return this.getResource(`/books`);
    }
    getBook(id) {
        return this.getResource(`/books/${id}`);
    }

    _transformCharacter(char) {
        for (let prop in char) {
            if (!char[prop]) {
                char[prop] = 'Unknown';
            }
        }
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapost: house.ancestralWeapost
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}