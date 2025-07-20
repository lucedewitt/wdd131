const characters = [
    {
        Name: 'Sky',
        Age: '21',
        Games: 'Skyward Sword',
        Skills: ['Spin Attack', 'Fatal Blow', 'Skyward Strike'],
        Tags: ['Knight', 'Swordsman', 'Musical'],
        Enemies: ['Chu Chu', 'Ghirahim', 'Demise'],
        Normalpic: 'images/SkyNormal.jpg',
        NormalpicAlt: 'Skyword Sword Link',
        Attackpic: 'images/SkyBattle.jpg',
        AttackpicAlt: 'Sky Fighting',
        Health: 100,
        Enemypics: ['images/chuchu.png', 'images/Ghirahim.webp', 'images/Demise.webp'],
        EnemypicsAlt: ['Chu Chu', 'Ghirahim', 'Demise']
    },
    {
        Name: 'Four',
        Age: '16',
        Games: 'Four Swords, Four Swords Adventures, Minish Cap',
        Skills: ['Hammer', 'Firerod', 'Split'],
        Tags: ['Smith', 'Transformer', 'Swordsman'],
        Enemies: ['Hikkun', 'Hinox', 'Vaati'],
        Normalpic: 'images/FourNormal.jpg',
        NormalpicAlt: 'Four Swords Adventures Link',
        Attackpic: 'images/FourBattle.jpg',
        AttackpicAlt: 'Four Fighting',
        Skillpic: 'images/FourSplit.jpg',
        SkillpicAlt: 'Four spliting into 4, all different colors',
        Health: 100,
        Enemypics: ['images/Hikkun.webp', 'images/Hinox.jpg', 'images/Vaati.jpg'],
        EnemypicsAlt: ['Hikkun', 'Hinox', 'Vaati']
    },
    {
        Name: 'Time',
        Age: '30s?',
        Games: "Ocarina of Time, Majora's Mask",
        Skills: ['Jump Attack', 'Rewind', 'Fierce Diety Mask'],
        Tags: ['Musical', 'Swordsman', 'Magic'],
        Enemies: ['Deku Scrub', 'Phantom Shadow', 'Moon'],
        Normalpic: 'images/TimeNormal.jpg',
        NormalpicAlt: 'Ocarina of Time Link',
        Attackpic: 'mages/TimeBattle.jpg',
        AttackpicAlt: 'Time Fighting',
        Skillpic: 'images/TimeFierceDeity.jpg',
        SkillpicAlt: 'Fierce Deity Time',
        Health: 100,
        Enemypics: ['images/DekuScrub.png', 'images/phantomShadow.png', 'images/Moon.png'],
        EnemypicsAlt: ['Deku Scrub', 'Phantom Shadow', 'Moon']
    },
    {
        Name: 'Wind',
        Age: '14',
        Games: 'Wind Waker, Phantom Hourglass',
        Skills: ['Boomerang', 'Hook Shot', 'Parry'],
        Tags: ['Musical', 'Pirate', 'Magic'],
        Enemies: ['Rat', 'Poe', 'Puppet Ganon'],
        Normalpic: 'images/WindNormal.jpg',
        NormalpicAlt: 'Wind Waker Link',
        Attackpic: 'images/WindBattle.jpg',
        AttackpicAlt: 'Wind Fighting',
        Health: 100,
        Enemypics: ['images/Rat.png', 'images/Poe.png', 'images/PuppetGanon.png'],
        EnemypicsAlt: ['Rats', 'Poe', 'Puppet Ganon']
    },
    {
        Name: 'Legend',
        Age: '19',
        Games: "A Link to the Past, Link's Awakening, Oracle of Seasons, Oracle of Ages, A Link Between Worlds, Tri Force Heroes",
        Skills: ['Rings', 'Spin Attack', 'Magic Rod'],
        Tags: ['Musical', 'Magic', 'Transformer'],
        Enemies: ['Moblins', 'Darknut', 'Dharkstare'],
        Normalpic: 'images/LegendNormal.jpg',
        NormalpicAlt: 'Hero of Legends Link',
        Attackpic: 'images/LegendBattle.jpg',
        AttackpicAlt: 'Legend Fighting',
        Health: 100,
        Enemypics: ['images/Moblin.jpg', 'images/Darknut.png', 'images/Dharkstare.webp'],
        EnemypicsAlt: ['Moblin', 'Darknut', 'Dharkstare']
    },
    {
        Name: 'Hyrule',
        Age: '17',
        Games: 'The Legend of Zelda, Zelda II: Adventures of Link',
        Skills: ['Healing', 'Stab', 'Lightning'],
        Tags: ['Healer', 'Swordsman', 'Magic'],
        Enemies: ['Purple Ache', 'Thuderbird', "Link's Shadow"],
        Normalpic: 'images/HyruleNormal.jpg',
        NormalpicAlt: 'Hero of Hyrule Link',
        Attackpic: 'images/HyruleBattle.jpg',
        AttackpicAlt: 'Hyrule Fighting',
        Skillpic: 'images/HyruleHealing.jpg',
        SkillpicAlt: 'Hyrule Healing',
        Health: 100,
        Enemypics: ['images/Ache.png', 'images/Thunderbird.webp', 'images/ShadowLink.png'],
        EnemypicsAlt: ['Purple Ache', 'Thunderbird', "Link's Shadow"]
    },
    {
        Name: 'Twilight',
        Age: '22',
        Games: 'Twilight Princess',
        Skills: ['Mounted Attack', 'Helm Slice', 'Transform'],
        Tags: ['Transformer', 'Swordsman', 'Rancher'],
        Enemies: ['Aeralfos', 'King Bulblin', 'Dark Beast Ganon'],
        Normalpic: 'images/TwilightNormal.jpg',
        NormalpicAlt: 'Twilight Princess Link',
        Attackpic: 'images/TwilightBattle.jpg',
        AttackpicAlt: 'Twilight Fighting',
        Skillpic: 'images/TwilightWolfie.jpg',
        SkillpicAlt: 'Twilight in wolf form',
        Health: 100,
        Enemypics: ['images/Aeralfos.webp', 'images/KingBulblin.webp', 'images/DarkBeastGanon.jpg'],
        EnemypicsAlt: ['Aeralfos', 'King Bulblin', 'Dark Beast Ganon']
    },
    {
        Name: 'Warriors',
        Age: '24',
        Games: 'Hyrule Warriors',
        Skills: ['Gauntlets', 'Shockwave', 'Special Attack'],
        Tags: ['Knight', 'Captain', 'Healer'],
        Enemies: ['Cuccos', 'Bokoblin', 'Cia'],
        Normalpic: 'images/WarriorsNormal.jpg',
        NormalpicAlt: 'Hyrule Warriors Definitive Edition Link',
        Attackpic: 'images/WarriorsBattle.jpg',
        AttackpicAlt: 'Warriors Fighting',
        Health: 100,
        Enemypics: ['images/Cuccos.avif', 'images/Bokoblin.png', 'images/Cia.jpg'],
        EnemypicsAlt: ['Cuccos', 'Bokoblin', 'Cia']
    },
    {
        Name: 'Wild',
        Age: '17',
        Games: 'Breath of the Wild, Tears of the Kingdom',
        Skills: ['Bombs', 'Bow', 'Flurry rush'],
        Tags: ['Knight', 'Cook', 'Archer'],
        Enemies: ['Lizalfos', 'Gloom Hands', 'Demon Dragon'],
        Normalpic: 'images/WildNormal.jpg',
        NormalpicAlt: 'Breath of the Wild Link',
        Attackpic: 'images/WildBattle.jpg',
        AttackpicAlt: 'Wild Fighting',
        Health: 100,
        Enemypics: ['images/Lizalfos.png', 'images/GloomHands.webp', 'images/DemonDragon.jpg'],
        EnemypicsAlt: ['Lizalfos', 'Gloom Hands', 'Demon Dragon'],
        SpecialEnemypic: 'images/PhantomGanon.png',
        SpecialEnemypicAlt: 'Phantom Ganon'
    }
]

let results = document.querySelector('#results');

let search_button = document.querySelector('.searchpic');
search_button.addEventListener("click", search);

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    search();
});

results.addEventListener("click", function(event) {
    if (event.target.matches(".tags button")) {
        let searchedfor = event.target.textContent;

        results.innerHTML = "";

        let filtered_results = characters.filter(function(character) {
        return (
            character.Tags.find((tag) => tag.toLowerCase().includes(searchedfor.toLowerCase()))
        )
        });

        let sorted_results = filtered_results.sort(function(a, b) {
            return a.Name.toLocaleLowerCase().localeCompare(b.Name.toLocaleLowerCase())
        });

        sorted_results.forEach(function(character) {
            display_character(character)
        });
    }
    else if (event.target.matches(".name")) {
        const characterName = event.target.textContent;

        window.location.href = `character.html?name=${encodeURIComponent(characterName)}`;
    }
})

results.addEventListener("keydown", function(event) {
    if (event.target.matches(".name")) {
        if (event.key == 'Enter' || event.key == ' ') {
        const characterName = event.target.textContent;

        window.location.href = `character.html?name=${encodeURIComponent(characterName)}`;
        }
    }
})

function search() {
    let searchedfor = document.querySelector('#search').value;

    results.innerHTML = "";

    let filtered_results = characters.filter(function(character) {
        return (
            character.Name.toLowerCase().includes(searchedfor.toLowerCase()) || 
            character.Games.toLowerCase().includes(searchedfor.toLowerCase()) || 
            character.Tags.find((tag) => tag.toLowerCase().includes(searchedfor.toLowerCase()))
        )
    });

    let sorted_results = filtered_results.sort(function(a, b) {
        return a.Name.toLocaleLowerCase().localeCompare(b.Name.toLocaleLowerCase())
    });

    sorted_results.forEach(function(character) {
        display_character(character)
    });
};

function display_character(character) {
    html = character_template(character);
    results.innerHTML += html
};

function character_template(character) {
    return `<div class="result">
                <img src=${character.Normalpic} alt=${character.NormalpicAlt} class="mini">
                <div class="result_info">
                    <h3 tabindex="0" class="name">${character.Name}</h3>
                    <p>Main Game(s): ${character.Games}</p>
                    <div class="tags">
                        ${character.Tags.map((tag) => `<button>${tag}</button>`).join('')}
                     </div>
                </div>
            </div>`
};