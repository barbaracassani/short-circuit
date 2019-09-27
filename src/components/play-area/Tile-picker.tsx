import Level from '../../interfaces/level';

// thank you stack overflow for the shuffle
function shuffle<T>(a: T[]): T[] {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

class TilePicker {

    private level: Level;
    private gridLength: number;
    private items: Level['identifiers'];

    constructor(level: Level) {
        this.level = level as Level;
        this.gridLength = this.level.grid.split('').filter(item => item === 'x').length;
        this.items = [];
        while (this.gridLength) {
            const items = this.level.identifiers;
            const useIdentifier = items[Math.floor(Math.random()*items.length)];
            this.items.push(useIdentifier);
            this.items.push(useIdentifier);
            this.gridLength-=2;
        }
        this.items = shuffle(this.items);
    }

    sendTile(): string {
        return this.items.pop() || '';
    }

}
export default TilePicker;