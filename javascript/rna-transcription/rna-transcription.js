//Given a DNA strand, return its RNA complement (per RNA transcription).

//* `G` -> `C`
//* `C` -> `G`
//* `T` -> `A`
//* `A` -> `U`

export const toRna = dna => {
  dna = dna.toString();
  let rna = dna.replace("G", "C");
  console.log(rna);
  rna = dna.replace("C", "G");
  console.log(rna);
  rna = dna.replace("T", "A");
  console.log(rna);
  rna = dna.replace("A", "U");
  console.log(rna);

  return rna;
};
