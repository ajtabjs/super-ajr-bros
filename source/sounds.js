export class Sounds {

    setUp(e) {
        this.e = e;
        this.soundArray = ["freeLife","levelMusic", "flagpole","bump","coin","die","fireball","jump","kick","powerup","powerupAppears","stageWon","stomp","powerdown","breakblock","fireworks","bowserFall"];
        this.loadedSounds = [];

        for (var i = 0; i < this.soundArray.length; i++) {
            this.loadSounds(this.soundArray[i]);
        }

        this.songs = [
            new Howl({ src: ['source/sounds/levelMusic.mp3'] }),  // Replace with your actual song file
        ];
        this.songNum = 0;
        this.playing = false;
        this.currentSongFile = './sounds/levelMusic.mp3';
        this.curSound = 0;
        this.soundLength = 0;

        this.songFiles = [];
        for (var i = 0; i < this.songs.length; i++) {
            this.songFiles.push(1);
        }
    }

    playSong() {
        if (this.e.soundOn === true && this.songs.length > 0) {
            if (!this.playing) {
                this.songs[this.songNum].play();
                this.playing = true;

                // Optionally, you can add an event listener to handle when the song finishes
                this.songs[this.songNum].on('end', () => {
                    this.playing = false;
                    // Logic to handle what to do when the song ends
                });
            }
        }
    }

    loadSounds(url) {
        var theSound = new Howl({
            src: ['source/sounds/' + url + ".mp3"]
        });
        theSound.on('load', (event) => {
            theSound.name = url;
            this.loadedSounds.push(theSound);
        });
    }

    p(type) {
        if (this.e.soundOn === true) {
            for (var i = 0; i < this.loadedSounds.length; i++) {
                if (this.loadedSounds[i].name === type) {
                    console.log("-->" + type)
                    this.loadedSounds[i].play();
                }
            }
        }
    }
}
