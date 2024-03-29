// 6.	Make a Dictionary
// You will receive an array with strings in the form of JSON's.
// You have to parse these strings and combine them into one object. Every string from the array will hold terms and a description. If you receive the same term twice, replace it with the new definition.
// Print every term and definition in that dictionary on new line in format:
// `Term: ${term} => Definition: ${definition}`
// Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.
function dictionary(arr) {
  let newDictionary = {};
  for (let each of arr) {
    let term = JSON.parse(each);
    //console.log(term);
    Object.assign(newDictionary, term);
    //console.log(newDictionary);
  }
  let sortedDictionary = Object.keys(newDictionary).sort();
  sortedDictionary.forEach((term) => {
    console.log(`Term: ${term} => Definition: ${newDictionary[term]}`);
  });
}
dictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
