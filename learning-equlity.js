const scientists = {
    "e3d46de8c7194cb1a32275195c15dc07": {
        id: "e3d46de8c7194cb1a32275195c15dc07",
        name: "Niels Bohr",
        specialization: "Quantum Mechanics",
        known_for: ["Wave/Particle Duality", "Uncertainty"],
    },
    "7064c3f9c99743b2838bbd8eacafe0d6": {
        id: "7064c3f9c99743b2838bbd8eacafe0d6",
        name: "Max Planck",
        known_for: "Planck's constant",
    },
    "b19e575a0d3f4151a1391452d8a47a44": {
        id: "b19e575a0d3f4151a1391452d8a47a44",
        name: "Jane Goodall",
        specialization: "Apes",
    },
    "17d9d0908f454253b5337e8c1ef4b564": {
        id: "17d9d0908f454253b5337e8c1ef4b564",
        name: "Caroline Herschel",
        specialization: "Stars",
    },
};

const transformScientists = (scientists) => {
    const scientists_copy = scientists;
    Object.keys(scientists_copy).map((keyName, index) => {
        scientists_copy[keyName] = addMissingFields(keyName, scientists_copy);
    });
    return JSON.stringify({"scientists": scientists_copy},null,4)
}



const addMissingFields = (scientist_id, scientists) => {
    const required_fields = ["id", "name", "specialization", "known_for"];
    required_fields.forEach(ele => {
        if (scientists[scientist_id][ele] === undefined) {
            scientists[scientist_id][ele] = 'None'
        };
    });
    return scientists[scientist_id]
}

