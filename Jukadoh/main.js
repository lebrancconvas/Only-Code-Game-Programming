// Config (Object Variable)
let config = {
    //Type
    type: Phaser.AUTO,

    //Width
    width: 800,

    //Height 
    height: 600,

    //Physics
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 200 } }
    },

    //Scene 
    scene: {
        preload: preload,
        create: create
    }
}

let game = new Phaser.Game(config)

// Preload (Function) => For Assets Initialize. 
function preload() {
    //Set Base URL
    this.load.setBaseURL('http://labs.phaser.io')

    //Load Image 
    this.load.image('sky', 'assets/skies/space.jpg')
    this.load.image('logo', 'assets/sprites/ship.png')
    this.load.image('red', 'assets/particles/muzzleflash3.png')
}

// Create (Function) => For Create Game Logic. 
function create() {
    //Sky Management
    this.add.image(400, 300, 'sky')

    //Red Management
    let particles = this.add.particles('red')
    let emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    })

    //Logo Management
    let logo = this.physics.add.image(400, 100, 'logo')
    logo.setVelocity(200, 250)
    logo.setBounce(1, 1)
    logo.setCollideWorldBounds(true)

    //Add Particles to follow Logo. 
    emitter.startFollow(logo)
}