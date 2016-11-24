import { BoardGame } from './board-game'

describe('BoardGame', () => {
    it('should create an instance', () => {
        expect(new BoardGame()).toBeTruthy;
    });

    it('should accept default values in the constructor', () => {
        let bg = new BoardGame({
            title: 'test',
            bggLink: 'http://www.test.com',
            image: '/test.png',
            minNumPlayers: 1,
            maxNumPlayers: 5,
            averageGameTime: 120,
            owned: true,
            lastPlayed: Date.now()
        });
        expect(bg.title).toEqual('test');
        expect(bg.bggLink).toEqual('http://www.test.com');
        expect(bg.image).toEqual('/test.png');
        expect(bg.minNumPlayers).toEqual(1);
        expect(bg.maxNumPlayers).toEqual(5);
        expect(bg.owned).toEqual(true);
        expect(bg.owned).toBeLessThanOrEqual(Date.now());
    });
});