export class Sounds {

    setUp(e) {
        this.e=e;
        this.soundArray = ["freeLife","flagpole","bump","coin","die","fireball","jump","kick","powerup","powerupAppears","stageWon","stomp","powerdown","breakblock","fireworks","bowserFall"];
        this.loadedSounds = [];

        for(var i=0; i<this.soundArray.length; i++){
            this.loadSounds(this.soundArray[i]);
        }

        this.songs = [];
        this.songNum = 0;
        this.playing = false;
        this.currentSongFile = null;
        this.curSound = 0;
        this.soundLength = 0;

        this.songFiles=[];

        for(var i=0; i<this.songs.length; i++){
            this.songFiles.push(null);
        }

    }

    loadSounds(url){
        var theSound = new Howl({
            src: ['source/sounds/'+url+".mp3"]
        });
        theSound.on('load', (event) => {
            theSound.name=url;
            this.loadedSounds.push(theSound);
            // console.log("SOUND: "+url+" - "+this.loadedSounds.length+" / "+this.soundArray.length);
        });
    }

    p(type){
        if(this.e.soundOn===true){
            for(var i=0; i<this.loadedSounds.length; i++){
                // console.log(" sound -----> "+type+" / "+this.loadedSounds[i].name)
                if(this.loadedSounds[i].name===type){
                    console.log("-->"+type)
                    this.loadedSounds[i].play();
                }
            }
        }
    }

}
