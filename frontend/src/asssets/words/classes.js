
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
        this.audio = `/audio/cvcShort/${letter}/${name}.m4a`;
        this.img = `/img/cvcShort/${letter}/${name}.png`;
    }
}

export class Add extends Vocabulary {
    constructor(name, letter){
        super(name, letter);
        this.type = "cvcAdd"
        this.audio = `/audio/cvcAdd/${letter}/${name}.m4a`;
        this.img = `/img/cvcAdd/${letter}/${name}.jpg`;
    }
}

export class Blend extends Vocabulary {
    constructor(name, letter, cardLetter=letter){
        super(name, letter);
        this.cardLetter = cardLetter;
        this.type= "blends";
        this.img = `/img/blends/${letter}/${name}.jpg`;
        //this.img = `./assets/wordlist/img/blends/${letter}/${name}.png`;
    }
}
