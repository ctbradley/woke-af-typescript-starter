const adjectives = [
    'dumb',
    'ignorant',
    'mindless',
    'naive',
    'stupid',
    'uneducated',
    'uninformed',
];

const nouns = [
    'crowd',
    'hordes',
    'masses',
    'mobs',
    'multitudes',
    'people',
    'public',
];

const verbs = [
    'bamboozled',
    'conned',
    'deceived',
    'duped',
    'fooled',
    'swindled',
    'tricked',
];

const randomNumber = (maxInteger: number): number => {
    return Math.floor(Math.random() * maxInteger);
};

const randomSentence = (): string => {
    return `The ${adjectives[randomNumber(adjectives.length)]} ${
        nouns[randomNumber(nouns.length)]
    } will always be ${verbs[randomNumber(verbs.length)]}.`;
};

console.log(randomSentence());
