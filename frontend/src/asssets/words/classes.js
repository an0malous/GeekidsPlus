
export class Vocabulary{
    constructor(name, letter) {
        this.name = name;
        this.letter = letter;
    }
}

export class Short extends Vocabulary {
    constructor(name, letter){
        super(name, letter);
        this.type = "cvc";
        this.audio = `./assets/audio/cvcShort/${letter}/${name}.m4a`;
        this.img = `./assets/wordlist/img/cvcShort/${letter}/${name}.png`;
    }
}

export class Add extends Vocabulary {
    constructor(name, letter){
        super(name, letter);
        this.type = "cvcAdd"
        this.audio = `../src/assets/audio/cvcAdd/${letter}/${name}.m4a`;
        this.img = `../src/assets/img/cvcAdd/${letter}/${name}.png`;

    }
}

export class Blend extends Vocabulary {
    constructor(name, letter){
        super(name, letter);
        this.type= "blends";
        this.audio = `./assets/audio/blends/${letter}/${name}.m4a`;
        //this.img = `./assets/wordlist/img/blends/${letter}/${name}.png`;
    }
}
