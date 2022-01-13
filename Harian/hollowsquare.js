function kotakKosong(n){

    let na = n;
    let string1 = "";
    if (na <= 1) {
       console.log(" n harus lebih dari 1")
    }
    
    for (let i = 0; i <= na; i++) { //perulangan untuk baris pertama
      
      if (i !== na) { //jika i tidak sama dengan na
      string1 = string1 +  "*"; // menambahkan string1 sebanyaka na
      } else { //perulangan untuk baris ke 1-na (na -2) 
              for (let k = 2; k <= na; k++) { //menciptakan baris ke 2 sampai na -1
              console.log(string1) //output baris[k]
              string1 = "*"
              let as = ' ';
                if (k === na) {
                        for (let pk = 0; pk <= na -2; pk++)
                                string1 = string1 +  "*";
                                console.log(string1) //mencetak baris terakhir (na)
                                }
                        for (let po = 0; po <= na; po++) { 
                        if (po !== na -2) { //menciptakan spasi dibaris 2 - 8 ditengah * pertama dan terakhir
                          string1 = string1 +  `${as}`;
                        } else {
                                for (let pi = na; pi <= na; pi++) { //menambhakan spasi di baris kedua - 8 ditengah
                                string1 += "*" //menambahkan karakter * di putaran akhir
                                }
                          }
                  }
              } 
              
            }
    }
}

kotakKosong(11);

