const characters = [
    {
        Name: 'Sky',
        Age: '21',
        Games: 'Skyward Sword',
        Skills: ['Spin Attack', 'Fatal Blow', 'Skyward Strike'],
        Tags: ['Knight', 'Swordsman', 'Musical'],
        Enemies: ['Chu Chu', 'Ghirahim', 'Demise'],
        EnemyHealth: [30, 60, 100],
        Normalpic: 'images/SkyNormal.jpg',
        NormalpicAlt: 'Skyword Sword Link',
        Attackpic: 'images/SkyBattle.jpg',
        AttackpicAlt: 'Sky Fighting',
        Health: 100,
        Stamina: 5,
        Enemypics: ['images/chuchu.png', 'images/Ghirahim.webp', 'images/Demise.webp'],
        EnemypicsAlt: ['Chu Chu', 'Ghirahim', 'Demise'],
        Attack(lastClicked, randomNum, character) {
            if (lastClicked === 'skill1') {
                normalAttack(lastClicked, randomNum, character)
                return true;
            } else if (lastClicked === 'skill2') {
                if (character.Stamina >= 2) {
                    normalAttack(lastClicked, randomNum, character);
                    return true
                } else {
                    failedAttack()
                }
            } else {
                if (character.Stamina >= 3) {
                    normalAttack(lastClicked, randomNum, character)
                    return true
                } else {
                    failedAttack()
                }
            }
        },
        Attacked(newrandomNum, randomNum, character) {
            if (this.EnemyHealth[randomNum] > 0) {
                enemyAttack(newrandomNum, randomNum, character)
            }
        },
        RegainStamina() {
            this.Stamina += 1;
        }
    },
    {
        Name: 'Four',
        Age: '16',
        Games: 'Four Swords, Four Swords Adventures, Minish Cap',
        Skills: ['Hammer', 'Firerod', 'Split'],
        Tags: ['Smith', 'Transformer', 'Swordsman'],
        Enemies: ['Hikkun', 'Hinox', 'Vaati'],
        EnemyHealth: [30, 60, 100],
        Normalpic: 'images/FourNormal.jpg',
        NormalpicAlt: 'Four Swords Adventures Link',
        Attackpic: 'images/FourBattle.jpg',
        AttackpicAlt: 'Four Fighting',
        Skillpic: 'images/FourSplit.jpg',
        SkillpicAlt: 'Four spliting into 4, all different colors',
        Health: 100,
        Stamina: 5,
        Enemypics: ['images/Hikkun.webp', 'images/Hinox.jpg', 'images/Vaati.jpg'],
        EnemypicsAlt: ['Hikkun', 'Hinox', 'Vaati'],
        Attack(lastClicked, randomNum, character) {
            if (lastClicked === 'skill1') {
                normalAttack(lastClicked, randomNum, character)
                return true;
            } else if (lastClicked === 'skill2') {
                if (character.Stamina >= 2) {
                    normalAttack(lastClicked, randomNum, character);
                    return true
                } else {
                    failedAttack()
                }
            } else {
                if (character.Stamina >= 3) {
                    normalAttack(lastClicked, randomNum, character)
                    let attackpic = document.querySelector('.hbattle_image');
                    changePic(attackpic, character);
                    return true
                } else {
                    failedAttack()
                }
            }
        },
        Attacked(newrandomNum, randomNum, character) {
            if (this.EnemyHealth[randomNum] > 0) {
                enemyAttack(newrandomNum, randomNum, character)
            }
        },
        RegainStamina() {
            this.Stamina += 1;
        }
    },
    {
        Name: 'Time',
        Age: '30s?',
        Games: "Ocarina of Time, Majora's Mask",
        Skills: ['Jump Attack', 'Rewind', 'Fierce Diety Mask'],
        Tags: ['Musical', 'Swordsman', 'Magic'],
        Enemies: ['Deku Scrub', 'Phantom Shadow', 'Moon'],
        EnemyHealth: [30, 60, 100],
        Normalpic: 'images/TimeNormal.jpg',
        NormalpicAlt: 'Ocarina of Time Link',
        Attackpic: 'images/TimeBattle.jpg',
        AttackpicAlt: 'Time Fighting',
        Skillpic: 'images/TimeFierceDeity.jpg',
        SkillpicAlt: 'Fierce Deity Time',
        Health: 100,
        Stamina: 5,
        Enemypics: ['images/DekuScrub.png', 'images/phantomShadow.png', 'images/Moon.png'],
        EnemypicsAlt: ['Deku Scrub', 'Phantom Shadow', 'Moon'],
        Attack(lastClicked, randomNum, character) {
            if (lastClicked === 'skill1') {
                normalAttack(lastClicked, randomNum, character)
                return true;
            } else if (lastClicked === 'skill2') {
                if (character.Stamina >= 2) {
                    normalAttack(lastClicked, randomNum, character);
                    return true
                } else {
                    failedAttack()
                }
            } else {
                if (character.Stamina >= 3) {
                    normalAttack(lastClicked, randomNum, character)
                    let attackpic = document.querySelector('.hbattle_image');
                    changePic(attackpic, character);
                    return true
                } else {
                    failedAttack()
                }
            }
        },
        Attacked(newrandomNum, randomNum, character) {
            if (this.EnemyHealth[randomNum] > 0) {
                enemyAttack(newrandomNum, randomNum, character)
            }
        },
        RegainStamina() {
            this.Stamina += 1;
        }
    },
    {
        Name: 'Wind',
        Age: '14',
        Games: 'Wind Waker, Phantom Hourglass',
        Skills: ['Boomerang', 'Hook Shot', 'Parry'],
        Tags: ['Musical', 'Pirate', 'Magic'],
        Enemies: ['Rat', 'Poe', 'Puppet Ganon'],
        EnemyHealth: [30, 60, 100],
        Normalpic: 'images/WindNormal.jpg',
        NormalpicAlt: 'Wind Waker Link',
        Attackpic: 'images/WindBattle.jpg',
        AttackpicAlt: 'Wind Fighting',
        Health: 100,
        Stamina: 5,
        Enemypics: ['images/Rat.png', 'images/Poe.png', 'images/PuppetGanon.png'],
        EnemypicsAlt: ['Rats', 'Poe', 'Puppet Ganon'],
        Attack(lastClicked, randomNum, character) {
            if (lastClicked === 'skill1') {
                normalAttack(lastClicked, randomNum, character)
                return true;
            } else if (lastClicked === 'skill2') {
                if (character.Stamina >= 2) {
                    normalAttack(lastClicked, randomNum, character);
                    return true
                } else {
                    failedAttack()
                }
            } else {
                if (character.Stamina >= 3) {
                    normalAttack(lastClicked, randomNum, character)
                    return true
                } else {
                    failedAttack()
                }
            }
        },
        Attacked(newrandomNum, randomNum, character) {
            if (this.EnemyHealth[randomNum] > 0) {
                enemyAttack(newrandomNum, randomNum, character)
            }
        },
        RegainStamina() {
            this.Stamina += 1;
        }
    },
    {
        Name: 'Legend',
        Age: '19',
        Games: "A Link to the Past, Link's Awakening, Oracle of Seasons, Oracle of Ages, A Link Between Worlds, Tri Force Heroes",
        Skills: ['Rings', 'Spin Attack', 'Magic Rod'],
        Tags: ['Musical', 'Magic', 'Transformer'],
        Enemies: ['Moblins', 'Darknut', 'Dharkstare'],
        EnemyHealth: [30, 60, 100],
        Normalpic: 'images/LegendNormal.jpg',
        NormalpicAlt: 'Hero of Legends Link',
        Attackpic: 'images/LegendBattle.jpg',
        AttackpicAlt: 'Legend Fighting',
        Health: 100,
        Stamina: 5,
        Enemypics: ['images/Moblin.jpg', 'images/Darknut.png', 'images/Dharkstare.webp'],
        EnemypicsAlt: ['Moblin', 'Darknut', 'Dharkstare'],
        Attack(lastClicked, randomNum, character) {
            if (lastClicked === 'skill1') {
                normalAttack(lastClicked, randomNum, character)
                return true;
            } else if (lastClicked === 'skill2') {
                if (character.Stamina >= 2) {
                    normalAttack(lastClicked, randomNum, character);
                    return true
                } else {
                    failedAttack()
                }
            } else {
                if (character.Stamina >= 3) {
                    normalAttack(lastClicked, randomNum, character)
                    return true
                } else {
                    failedAttack()
                }
            }
        },
        Attacked(newrandomNum, randomNum, character) {
            if (this.EnemyHealth[randomNum] > 0) {
                enemyAttack(newrandomNum, randomNum, character)
            }
        },
        RegainStamina() {
            this.Stamina += 1;
        }
    },
    {
        Name: 'Hyrule',
        Age: '17',
        Games: 'The Legend of Zelda, Zelda II: Adventures of Link',
        Skills: ['Healing', 'Stab', 'Lightning'],
        Tags: ['Healer', 'Swordsman', 'Magic'],
        Enemies: ['Purple Ache', 'Thuderbird', "Link's Shadow"],
        EnemyHealth: [30, 60, 100],
        Normalpic: 'images/HyruleNormal.jpg',
        NormalpicAlt: 'Hero of Hyrule Link',
        Attackpic: 'images/HyruleBattle.jpg',
        AttackpicAlt: 'Hyrule Fighting',
        Skillpic: 'images/HyruleHealing.jpg',
        SkillpicAlt: 'Hyrule Healing',
        Health: 100,
        Stamina: 5,
        Enemypics: ['images/Ache.png', 'images/Thunderbird.webp', 'images/ShadowLink.png'],
        EnemypicsAlt: ['Purple Ache', 'Thunderbird', "Link's Shadow"],
        Attack(lastClicked, randomNum, character) {
            if (lastClicked === 'skill1') {
                this.Health += 15;
                let attackpic = document.querySelector('.hbattle_image');
                changePic(attackpic, character);
                return true;
            } else if (lastClicked === 'skill2') {
                if (character.Stamina >= 2) {
                    normalAttack(lastClicked, randomNum, character);
                    return true
                } else {
                    failedAttack()
                }
            } else {
                if (character.Stamina >= 3) {
                    normalAttack(lastClicked, randomNum, character)
                    return true
                } else {
                    failedAttack()
                }
            }
        },
        Attacked(newrandomNum, randomNum, character) {
            if (this.EnemyHealth[randomNum] > 0) {
                enemyAttack(newrandomNum, randomNum, character)
            }
        },
        RegainStamina() {
            this.Stamina += 1;
        }
    },
    {
        Name: 'Twilight',
        Age: '22',
        Games: 'Twilight Princess',
        Skills: ['Mounted Attack', 'Helm Slice', 'Transform'],
        Tags: ['Transformer', 'Swordsman', 'Rancher'],
        Enemies: ['Aeralfos', 'King Bulblin', 'Dark Beast Ganon'],
        EnemyHealth: [30, 60, 100],
        Normalpic: 'images/TwilightNormal.jpg',
        NormalpicAlt: 'Twilight Princess Link',
        Attackpic: 'images/TwilightBattle.jpg',
        AttackpicAlt: 'Twilight Fighting',
        Skillpic: 'images/TwilightWolfie.jpg',
        SkillpicAlt: 'Twilight in wolf form',
        Health: 100,
        Stamina: 5,
        Enemypics: ['images/Aeralfos.webp', 'images/KingBulblin.webp', 'images/DarkBeastGanon.jpg'],
        EnemypicsAlt: ['Aeralfos', 'King Bulblin', 'Dark Beast Ganon'],
        Attack(lastClicked, randomNum, character) {
            if (lastClicked === 'skill1') {
                normalAttack(lastClicked, randomNum, character)
                return true;
            } else if (lastClicked === 'skill2') {
                if (character.Stamina >= 2) {
                    normalAttack(lastClicked, randomNum, character);
                    return true
                } else {
                    failedAttack()
                }
            } else {
                if (character.Stamina >= 3) {
                    normalAttack(lastClicked, randomNum, character)
                    let attackpic = document.querySelector('.hbattle_image');
                    changePic(attackpic, character);
                    return true
                } else {
                    failedAttack()
                }
            }
        },
        Attacked(newrandomNum, randomNum, character) {
            if (this.EnemyHealth[randomNum] > 0) {
                enemyAttack(newrandomNum, randomNum, character)
            }
        },
        RegainStamina() {
            this.Stamina += 1;
        }
    },
    {
        Name: 'Warriors',
        Age: '24',
        Games: 'Hyrule Warriors',
        Skills: ['Gauntlets', 'Shockwave', 'Special Attack'],
        Tags: ['Knight', 'Captain', 'Healer'],
        Enemies: ['Cuccos', 'Bokoblin', 'Cia'],
        EnemyHealth: [30, 60, 100],
        Normalpic: 'images/WarriorsNormal.jpg',
        NormalpicAlt: 'Hyrule Warriors Definitive Edition Link',
        Attackpic: 'images/WarriorsBattle.jpg',
        AttackpicAlt: 'Warriors Fighting',
        Health: 100,
        Stamina: 5,
        Enemypics: ['images/Cuccos1.jpg', 'images/Bokoblin.png', 'images/Cia.jpg'],
        EnemypicsAlt: ['Cuccos', 'Bokoblin', 'Cia'],
        Attack(lastClicked, randomNum, character) {
            if (lastClicked === 'skill1') {
                normalAttack(lastClicked, randomNum, character)
                return true;
            } else if (lastClicked === 'skill2') {
                if (character.Stamina >= 2) {
                    normalAttack(lastClicked, randomNum, character);
                    return true
                } else {
                    failedAttack()
                }
            } else {
                if (character.Stamina >= 3) {
                    normalAttack(lastClicked, randomNum, character)
                    return true
                } else {
                    failedAttack()
                }
            }
        },
        Attacked(newrandomNum, randomNum, character) {
            if (this.EnemyHealth[randomNum] > 0) {
                enemyAttack(newrandomNum, randomNum, character)
            }
        },
        RegainStamina() {
            this.Stamina += 1;
        }
    },
    {
        Name: 'Wild',
        Age: '17',
        Games: 'Breath of the Wild, Tears of the Kingdom',
        Skills: ['Bombs', 'Bow', 'Flurry rush'],
        Tags: ['Knight', 'Cook', 'Archer'],
        Enemies: ['Lizalfos', 'Gloom Hands', 'Demon Dragon'],
        EnemyHealth: [30, 60, 100],
        Normalpic: 'images/WildNormal.jpg',
        NormalpicAlt: 'Breath of the Wild Link',
        Attackpic: 'images/WildBattle.jpg',
        AttackpicAlt: 'Wild Fighting',
        Health: 100,
        Stamina: 5,
        Enemypics: ['images/Lizalfos.png', 'images/GloomHands1.jpg', 'images/DemonDragon.jpg'],
        EnemypicsAlt: ['Lizalfos', 'Gloom Hands', 'Demon Dragon'],
        Attack(lastClicked, randomNum, character) {
            if (lastClicked === 'skill1') {
                normalAttack(lastClicked, randomNum, character)
                return true;
            } else if (lastClicked === 'skill2') {
                if (character.Stamina >= 2) {
                    normalAttack(lastClicked, randomNum, character);
                    return true
                } else {
                    failedAttack()
                }
            } else {
                if (character.Stamina >= 3) {
                    normalAttack(lastClicked, randomNum, character)
                    return true
                } else {
                    failedAttack()
                }
            }
        },
        Attacked(newrandomNum, randomNum, character) {
            if (this.EnemyHealth[randomNum] > 0) {
                enemyAttack(newrandomNum, randomNum, character)
            } else if (randomNum == 2){
                let enemypic = document.querySelector('.ebattle_image');
                renewEnemy(character, enemypic)
            }
        },
        RegainStamina() {
            this.Stamina += 1;
        }
    }
]

const params = new URLSearchParams(window.location.search);
let chosen_character = params.get("name");
let character =  characters.find(character => character.Name == chosen_character);

let randomNum = Math.floor(Math.random() * character.Enemies.length);

let battle_main = document.querySelector('#battle_main');

document.addEventListener("DOMContentLoaded", display_cards(character));

window.addEventListener("load", matchHeights);
window.addEventListener("resize", matchHeights)

function matchHeights() {
    let heroCard = document.querySelector('.hero-card');
    let enemyCard = document.querySelector('.enemy-card');

    if (heroCard && enemyCard) {
        enemyCard.style.height = 'auto';
        let heroHeight = heroCard.offsetHeight;
        enemyCard.style.height = `${heroHeight}px`
    }
}

function display_cards(character) {
    html = battle_template(character);
    battle_main.innerHTML = html;
};


function battle_template(character) {
    return `<div class="hero-card">
            <img class="hbattle_image" src="${character.Attackpic}" alt="${character.AttackpicAlt}">
            <div class="card_info">
                <div class="hcard-name">${character.Name}</div>
                <div class="stats">
                    <p><strong>Health:</strong> <span id='h-health'>${character.Health}</span></p>
                    <p><strong>Stamina:</strong> <span id='stamina'>${character.Stamina}</span></p>
                </div>
                <div class="hero_attacks">
                    <button class='skill1'>${character.Skills[0]}</button>
                    <button class='skill2'>${character.Skills[1]}</button>
                    <button class='skill3'>${character.Skills[2]}</button>
                </div>
            </div>
    </div>
    <div class="enemy-card">
            <img class="ebattle_image" src="${character.Enemypics[randomNum]}" alt="${character.EnemypicsAlt[randomNum]}">
            <div class="ecard-name">${character.Enemies[randomNum]}</div>
            <div class="stats">
                <p><strong>Health:</strong> <span id='e-health'>${character.EnemyHealth[randomNum]}</span></p>
            </div>
            <div id='message'></div>
            <div class="home"><a href='index.html' class='home'>Home→</a></div>
    </div>`
}

let enemy_health = document.querySelector('#e-health');
let stamina = document.querySelector('#stamina');
let hero_health = document.querySelector('#h-health');

let messagebox = document.querySelector('#message');

let lastClicked = null;

function set_levels() {
    enemy_health.textContent = character.EnemyHealth[randomNum];
    hero_health.textContent = character.Health;
    stamina.textContent = character.Stamina;
}

document.querySelectorAll('.skill1, .skill2, .skill3').forEach(skill => {
    skill.addEventListener('click', function() {
        lastClicked = this.className;
        let newrandomNum = Math.ceil(Math.random() * 3);
        attackSequence(lastClicked, newrandomNum)
    })
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function attackSequence(lastClicked, newrandomNum) {
    let successfulAttack = character.Attack(lastClicked, randomNum, character);
        set_levels();

        if (successfulAttack) {
            if (character.EnemyHealth[randomNum] >0) {
                await delay(1000);
                enemyMessage(character);
                await delay(1000);
                character.Attacked(newrandomNum, randomNum, character);
                set_levels();
                await delay(2000);
                staminaRecharge();
                await delay(1000);
                character.RegainStamina();
                set_levels();
                clearMessage();
            }
        }
}

function enemyMessage(character) {
    messagebox.innerHTML = `<p>${character.Enemies[randomNum]} is attacking!</p>`
}

function staminaRecharge() {
    messagebox.innerHTML = `<p>Stamina recharging</p>`
}

async function failedAttack() {
    messagebox.innerHTML = '<p>Not enough stamina</p>'
    await delay(1000);
    clearMessage();
}

function clearMessage() {
    messagebox.innerHTML = ''
}


function normalAttack(lastClicked, randomNum, character) {
    if (lastClicked === 'skill1') {
        if (character.EnemyHealth[randomNum] >= 10){
                character.EnemyHealth[randomNum] -= 10;
            } else {
                character.EnemyHealth[randomNum] = 0;
            }
    } else if (lastClicked === 'skill2') {
        if (character.EnemyHealth[randomNum] >= 20){
            character.EnemyHealth[randomNum] -= 20;
        } else {
            character.EnemyHealth[randomNum] = 0;
        }
        character.Stamina -= 2;
    } else {
        if (character.EnemyHealth[randomNum] >= 35){
            character.EnemyHealth[randomNum] -= 35;
        } else {
            character.EnemyHealth[randomNum] = 0;
        }
        character.Stamina -=3;
}
};

function enemyAttack(newrandomNum, randomNum, character) {
    if (randomNum == 0) {
        if (newrandomNum == 1) {
            character.Health -= 5;
        } else if (newrandomNum == 2) {
            character.Health -= 10;
        } else {
            character.Health -= 15;
        }
    } else if (randomNum == 1) {
        if (newrandomNum == 1) {
            character.Health -= 10;
        } else if (newrandomNum == 2) {
            character.Health -= 15;
        } else {
            character.Health -= 20;
        }
    } else {
        if (newrandomNum == 1) {
            character.Health -= 20;
        } else if (newrandomNum == 2) {
            character.Health -= 25;
        } else {
            character.Health -= 30;
        }
    }
}

async function changePic(pic, character) {
    pic.src = `${character.Skillpic}`
    pic.alt = `${character.SkillpicAlt}`
    await delay(1000)
    pic.src = `${character.Attackpic}`
    pic.alt = `${character.AttackpicAlt}`
}