const res = require('./script.js');

describe('Проверки', () => {

    describe('sum', () => {

        it(`sum - это правда`, () => {
            expect(res.sum(2, 2)).toBeTruthy()
        })
    })
    
    describe('num', () => {
    
        it(`num равен 5`, () => {
            expect(res.num).toBe(5)
        })
    })
    
    describe('each', function() {
        const result = res.each(res.arr, res.func);
    
        it('тип данных ответа - объект', function() {
            expect(typeof(result)).toStrictEqual('object')
        });
        it('ответ равен [8,7,6,5,4]', function() {
            expect(result).toEqual([8,7,6,5,4])
        });
        it('размер массива равен 5', function() {
            expect(result).toHaveLength(5)
        });
    
    });
})
