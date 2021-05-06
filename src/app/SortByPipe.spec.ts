import { SortByPipe } from './SortByPipe.pipe';
import { transformAll } from '@angular/compiler/src/render3/r3_ast';

describe('Pipe:SortByPipe', () => {
    let pipe: SortByPipe;

    beforeEach(() => {
        pipe = new SortByPipe();
    })

    it('providing no value returns no value', () => {
        expect(pipe.transform(null, 'asc', '')).toBe(null);
    });

    it('providing value of length 1 returns value only', () => {
        expect(pipe.transform(['1'], 'asc', '')).toEqual(['1']);
    });

    it('providing value but empty order returns value only', () => {
        expect(pipe.transform(['1'], '', '')).toEqual(['1']);
    })

    it('providing value but no order returns value', () => {
        expect(pipe.transform(['1'], null, '')).toEqual(['1']);
    });

    it('if column is null or empty and order is  ascending', () => {
        expect(pipe.transform([9, 5, 8], 'asc', null)).toEqual([5, 8, 9]);
    });

    it('if column is null or empty and order is  descending', () => {
        expect(pipe.transform(['B', 'A', 'C'], 'desc', '')).toEqual(['C', 'B', 'A']);
    });

});