//Given a DNA strand, return its RNA complement (per RNA transcription).

//* `G` -> `C`
//* `C` -> `G`
//* `T` -> `A`
//* `A` -> `U`

export const toRna = dna => {
  const pairings = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };

  const newStrand = dna
    .toString()
    .split("")
    .map(item => pairings[item]);

  return newStrand.join("");
};

// const translation = {
//   G: "C",
//   C: "G",
//   T: "A",
//   A: "U"
// };

// export const toRna = key => {
//   let newValue = "";

//   for (let k of key) {
//     newValue += translation[k];
//   }

//   return newValue;
// };

// export const toRna = (dnaStrand) => {
//   return dnaStrand.replace(/./g, c => complements[c]);
// };

// const complements = {
//   'C': 'G',
//   'G': 'C',
//   'T': 'A',
//   'A': 'U',
// };
