class Player {
    constructor (
        id, 
        teamids, 
        title, 
        matches, 
        runs, 
        wickets, 
        imageURL, 
        isIndian, 
        isInternational, 
    ) {
        this.id = id;
        this.teamids = teamids;
        this.title = title;
        this.matches = matches;
        this.runs = runs;
        this.wickets = wickets;
        this.imageURL = imageURL;
        this.isIndian = isIndian;
        this.isInternational = isInternational;
    }
}

export default Player;