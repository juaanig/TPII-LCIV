import { legalAge } from "./Age";

describe("test legal age", ()=>{

    test('should return a legal person', () => {
        const result =  legalAge(18);
        expect( result ).toBe(true)
    })

    test('should return a young person', () => {
        const result =  legalAge(16);
        expect( result ).toBe(false)
    })

    test('should return null', () => {
        const result =  legalAge(-9);
        expect( result ).toBe(null)
    })

})