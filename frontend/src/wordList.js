class Vocabulary{
    constructor(name, letter) {
        this.name = name;
        this.letter = letter
    }
}

class Short extends Vocabulary {
    constructor(name, letter){
        super(name, letter);
        this.type = "cvc";
        this.letter = letter;
        this.audio = `geekidsplus/src/audio/cvcShort/${letter}/${name}.m4a`;
        this.img = `geekidsplus/src/img/cvcShort/${letter}/${name}.png`;

    }
}

class Add extends Vocabulary {
    constructor(name, letter){
        super(name, letter);
        this.type = "cvcAdd"
        this.audio = `../public/audio/cvcAdd/${letter}/${name}.m4a`;
        this.img = `../public/img/cvcAdd/${letter}/${name}.png`;

    }
}

class Blends extends Vocabulary {
    constructor(name, letter){
        super(name, letter);
        this.type="blends";
        this.audio = `public/audio/blends/${letter}/${name}.m4a`;
        this.img = `public/img/blends/${letter}/${name}.png`;
    }
}


export const wordList = [
    new Short ("sad", "a"),
    new Short ("mad", "a"),
    new Short ("ham", "a"),
    new Short ("fan", "a"),
    new Short ("hat", "a"),
    new Short ("sat", "a"),
    new Short ("mat", "a"),
    new Short ("cap", "a"),
    new Short ("gas", "a"),
    new Short ("pan", "a"),
    new Short ("cat", "a"),
    new Short ("bat", "a"),
    new Short ("tag", "a"),
    new Short ("dad", "a"),
    new Short ("zap", "a"),
    new Short ("rat", "a"),
    new Short ("map", "a"),
    new Short ("yak", "a"),
    new Short ("man", "a"),
    new Short ("can", "a"),
    new Short ("ant", "a"),
    new Short ("fat", "a"),
    new Short ("bag", "a"),

    new Short ("dig", "i"),
    new Short ("sit", "i"),
    new Short ("kit", "i"),
    new Short ("lid", "i"),
    new Short ("pig", "i"),
    new Short ("lip", "i"),
    new Short ("fin", "i"),
    new Short ("fit", "i"),
    new Short ("hip", "i"),
    new Short ("win", "i"),
    new Short ("rip", "i"),
    new Short ("hit", "i"),
    new Short ("big", "i"),
    new Short ("zip", "i"),

    new Short ("bed", "e"),
    new Short ("pet", "e"),
    new Short ("pen", "e"),
    new Short ("ten", "e"),
    new Short ("web", "e"),
    new Short ("red", "e"),
    new Short ("gem", "e"),
    new Short ("get", "e"),
    new Short ("men", "e"),
    new Short ("jet", "e"),
    new Short ("vet", "e"),
    new Short ("set", "e"),
    new Short ("net", "e"),
    new Short ("hen", "e"),
    new Short ("beg", "e"),
    new Short ("wet", "e"),
    new Short ("leg", "e"),

    new Short ("hop", "o"),
    new Short ("top", "o"),
    new Short ("pot", "o"),
    new Short ("jog", "o"),
    new Short ("mop", "o"),
    new Short ("dog", "o"),
    new Short ("dot", "o"),
    new Short ("hot", "o"),
    new Short ("fog", "o"),
    new Short ("log", "o"),
    new Short ("not", "o"),
    new Short ("old", "o"),

    new Short ("gun", "u"),
    new Short ("bun", "u"),
    new Short ("cub", "u"),
    new Short ("sub", "u"),
    new Short ("mud", "u"),
    new Short ("hut", "u"),
    new Short ("sun", "u"),
    new Short ("cut", "u"),
    new Short ("tug", "u"),
    new Short ("tub", "u"),
    new Short ("bug", "u"),
    new Short ("fun", "u"),
    new Short ("rug", "u"),
    new Short ("run", "u"),
    new Short ("nut", "u"),
    new Short ("bud", "u"),
    new Short ("up)", "u"),
    new Short ("cup", "u"),
    new Short ("mug", "u"),
    new Short ("gum", "u"),
    new Short ("rub", "u")
]