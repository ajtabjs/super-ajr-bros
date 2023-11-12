export class Sounds {

    setUp(e) {
        this.e = e;
        this.soundArray = ["freeLife","levelMusic", "flagpole","bump","coin","die","fireball","jump","kick","powerup","powerupAppears","stageWon","stomp","powerdown","breakblock","fireworks","bowserFall"];
        this.loadedSounds = [];

        for (var i = 0; i < this.soundArray.length; i++) {
            this.loadSounds(this.soundArray[i]);
        }


        this.songs = [
            new Howl({ src: ['source/sounds/music/levelMusic.mp3'] }),
             new Howl({ src: ['source/sounds/music/b&b/01 - Go On Take A Chance.mp3'] }),
              new Howl({ src: ['source/sounds/music/b&b/02 - Nothing In My Way.mp3'] }),
               new Howl({ src: ['source/sounds/music/b&b/03 - I Want You Back.mp3'] }),
                new Howl({ src: ['source/sounds/music/b&b/04 - If U Were Me.mp3'] }),
                 new Howl({ src: ['source/sounds/music/b&b/05 - Drift Away.mp3'] }),
                  new Howl({ src: ["source/sounds/music/b&b/06 - You Can't Hurry Love.mp3"] }),
                   new Howl({ src: ['source/sounds/music/b&b/07 - Piano In Your Pocket.mp3'] }),
                    new Howl({ src: ['source/sounds/music/b&b/08 - My Very First Love Song.mp3'] }),
                     new Howl({ src: ['source/sounds/music/b&b/09 - Chelsea Streets.mp3'] }),
                      new Howl({ src: ['source/sounds/music/b&b/10 - Hallelujah.mp3'] }),
                       new Howl({ src: ["source/sounds/music/b&b/11 - I've Just Seen A Face.mp3"] }),
                        new Howl({ src: ['source/sounds/music/b&b/12 - Country House.mp3'] }),
                         new Howl({ src: ["source/sounds/music/b&b/13 - I'm A Believer.mp3"] }),
                          new Howl({ src: ['source/sounds/music/b&b/14 - Rainbow Man.mp3'] }),
                           new Howl({ src: ['source/sounds/music/b&b/15 - Classic.mp3'] })
        ];
        this.songNum = 0;
        this.playing = false;
        this.currentSongFile = './source/sounds/music/levelMusic.mp3';
        this.curSound = 0;
        this.soundLength = 0;

        this.songFiles = [];
        for (var i = 0; i < this.songs.length; i++) {
            this.songFiles.push(1);
        }

        // Add mouse handling code
        this.mouseIsDown = false;
        document.addEventListener("mousedown", this.handleMouseDown.bind(this));
    }

    handleMouseDown(event) {
        // This is where you can add custom logic for mouse down events
        // For example, you might want to play the song on the second click
        if (!this.mouseIsDown) {
            this.mouseIsDown = true;
        } else {
            this.mouseIsDown = false;
            this.playSong();
        }
    }

  playSong() {
    if (this.e.soundOn === true && this.songs.length > 0) {
        if (!this.playing) {
            this.songs[this.songNum].play();
            this.playing = true;

           this.songs[this.songNum].on('end', () => {
                // wait 0.5
                setTimeout(() => {
                    this.playing = false;
                   
                    this.songNum = (this.songNum + 1) % this.songs.length;
                    this.playSong();
                }, 500);
            });
        }
    }
}

skipToNextSong() {
        if (this.e.soundOn === true && this.songs.length > 0) {
            // Stop the currently playing song
            if (this.playing) {
                this.songs[this.songNum].stop();
                this.playing = false;
            }

            // Move to the next song
            this.songNum = (this.songNum + 1) % this.songs.length;

            // Play the next song
            this.playSong();
        }
    }

skipinput(){
  document.addEventListener("keydown", function(event) {
    if (event.key === "N" || event.key === "n") {
        // n stands for ni-ckalodeon tv shows!
        sounds.skipToNextSong();
    }}
)};



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
