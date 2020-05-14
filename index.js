const translate = (string="") => {
    const proteins=[];
    let obtainedproteins=[];
    const interval = 3;
    
    let codons = {
      AUG:"Methionine",
      UUU:"Phenylalanine", 
      UUC:"Phenylalanine",
      UUA:"Leucine",
      UUG:"Leucine",
      UCU:"Serine", 
      UCC:"Serine", 
      UCA:"Serine", 
      UCG:"Serine",
      UAU:"Tyrosine", 
      UAC:"Tyrosine",
      UGU:"Cysteine", 
      UGC:"Cysteine",
      UGG:"Tryptophan",
      UAA:"STOP", 
      UAG:"STOP", 
      UGA:"STOP"
    };
  
    if (!string) {
      return [];
    }
 
    for (let i = 0; i <string.length; i+= interval) {
      proteins.push(string.substr(i, interval));
    } 

   proteins.forEach(protein => {
     if (!codons[protein]) {
       throw new Error('Invalid codon')
     }
     obtainedproteins.push(codons[protein])
   });

   if (!proteins) {
     throw new Error ('Invalid codon');
   }

   if (obtainedproteins[0] === 'STOP') {
     return [];
   } else {
     if (obtainedproteins.includes('STOP')) {
       return obtainedproteins.slice(0, obtainedproteins.indexOf('STOP'))
     } else {
       return obtainedproteins;
     }
   }
};

  module.exports = translate;