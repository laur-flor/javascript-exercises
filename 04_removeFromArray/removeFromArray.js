
const removeFromArray = function(array, ...args) {
    for (let i = array.length; i >=0; i--) {
        if (args.includes(array[i])) {
            array.splice(i, 1);
        }
            
    }
    console.log("this returns: " + array);
    return array;
};

removeFromArray("1, 2, 3, 4");

// describe('removeFromArray', () => {
//     test('removes a single value', () => {
//       expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
//     });
//     test.skip('removes multiple values', () => {
//       expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
//     });
//     test.skip('removes multiple of the same value', () => {
//       expect(removeFromArray([1, 2, 2, 3], 2)).toEqual([1, 3]);
//     });
//     test.skip('ignores non present values', () => {
//       expect(removeFromArray([1, 2, 3, 4], 7, "tacos")).toEqual([1, 2, 3, 4]);
//     });
//     test.skip('ignores non present values, but still works', () => {
//       expect(removeFromArray([1, 2, 3, 4], 7, 2)).toEqual([1, 3, 4]);
//     });
//     test.skip('can remove all values', () => {
//       expect(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
//     });
//     test.skip('works with strings', () => {
//       expect(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)).toEqual([2, "ho"]);
//     });
//     test.skip('only removes same type', () => {
//       expect(removeFromArray([1, 2, 3], "1", 3)).toEqual([1, 2]);
//     });
//   });
  

// Do not edit below this line
module.exports = removeFromArray;
