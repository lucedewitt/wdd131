const character = {
    name: "Snortleblat",
    class: "Swamp Beat Diplomat",
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/img/snortleblat.png',
    attacked() {
        if (this.health >= 20) {
            this.level -= 1;
            this.health -= 20;
        } else {
            alert('Character Died');
        }
    },
    levelUp() {
        this.level += 1;
        this.health += 20;
    }
};

function setLevelHealth() {
    snortleblat_health.textContent = character.health;
    snortleblat_level.textContent = character.level;
}

let snortleblat_img = document.querySelector(".image");
snortleblat_img.src = character.image;

let snortleblat_name = document.querySelector(".name");
snortleblat_name.textContent = character.name;

let snortleblat_class = document.querySelector("#class");
snortleblat_class.textContent = character.class;

let snortleblat_level = document.querySelector("#level");
snortleblat_level.textContent = character.level;

let snortleblat_health = document.querySelector("#health");
snortleblat_health.textContent = character.health;

let attacked = document.querySelector("#attacked")
attacked.addEventListener("click", function() {
    character.attacked();
    setLevelHealth();
})

let level_up = document.querySelector("#levelup");
level_up.addEventListener("click", function() {
    character.levelUp();
    setLevelHealth();
})