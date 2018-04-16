export class Player {
    name = ""
    skills = {
        athletics: 0,
        acrobatics: 0,
        "sleight of hand": 0,
        stealth: 0,
        arcana: 0,
        history: 0,
        investigation: 0,
        nature: 0,
        religion: 0,
        "animal handling": 0,
        insight: 0,
        medicine: 0,
        perception: 0,
        survival: 0,
        deception: 0,
        intimidation: 0,
        performance: 0,
        persuasion: 0
    }
    saves: {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0
    }

    constructor (name, skills?, saves?) {
        this.name = name || "Bob";
        this.skills = skills || this.skills;
        this.saves = saves || this.saves;
    }
}