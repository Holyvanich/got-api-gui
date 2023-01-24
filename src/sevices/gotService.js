export default class GotSercive {

    constructor() {
        this._apiBase = 'https://anapioficeandfire.com/api';
        this.pageChar = Math.floor(Math.random() * 40 + 5);
        this.pageHouse = this.getRandomInt(30);
        this.pageBook = this.getRandomInt(3);
        
    }

    getRandomInt = (max, min = 1) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, 
            status ${res.status}`);
        }
        return await res.json();   
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=${this.pageChar}`);
        return res.map(this._transformCharacter)
    }
    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character)
    }
    getAllHouses = async () => {
        const res = await this.getResource(`/houses?page=${this.pageHouse}`);
        return res.map(this._transformHouse)
    }
    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house)
    }
    getAllBooks = async () => {
        const res = await this.getResource(`/books?page=${this.pageBook}`);
        return res.map(this._transformBook)
    }
    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book)
    }

    _transformCharacter = (char) => {
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
        for (let prop in house) {
            if (!house[prop]) {
                house[prop] = 'Unknown';
            }
        }
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapost: house.ancestralWeapost,
            founded: house.founded
        }
    }

    _transformBook(book) {
        for (let prop in book) {
            if (!book[prop]) {
                book[prop] = 'Unknown';
            }
        }
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }
}