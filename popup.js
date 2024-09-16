const mods = [
    {
        title: "Mod 1: FNF VS Whitty",
        description: "A mod featuring the iconic character Whitty.",
        link: "https://github.com/yourrepo/whitty-mod",
        image: "path/to/whitty-image.png"
    },
    {
        title: "Mod 2: FNF VS Bob",
        description: "Battle against Bob in this challenging mod!",
        link: "https://github.com/yourrepo/bob-mod",
        image: "path/to/bob-image.png"
    },
    {
        title: "Mod 3: FNF VS Tricky",
        description: "A fan-favorite mod featuring Tricky.",
        link: "https://github.com/yourrepo/tricky-mod",
        image: "path/to/tricky-image.png"
    },
    {
        title: "Mod 4: FNF VS Sky",
        description: "Groove to the beat with Sky in this fun mod.",
        link: "https://github.com/yourrepo/sky-mod",
        image: "path/to/sky-image.png"
    },
    {
        title: "Mod 5: FNF Indie Cross",
        description: "Cross over with characters from other indie games.",
        link: "https://github.com/yourrepo/indie-cross-mod",
        image: "path/to/indie-cross-image.png"
    }
];

const modContainer = document.getElementById('mod-container');

mods.forEach(mod => {
    const modItem = document.createElement('div');
    modItem.className = 'mod-item';
    
    modItem.innerHTML = `
        <h2>${mod.title}</h2>
        <img src="${mod.image}" alt="${mod.title}" width="100%">
        <p>${mod.description}</p>
        <a href="${mod.link}" target="_blank">More Info</a>
    `;
    
    modContainer.appendChild(modItem);
});
