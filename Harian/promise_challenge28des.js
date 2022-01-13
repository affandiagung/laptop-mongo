const Phytagoras = (samping, depan) =>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(samping==0 || depan == 0)
          reject(new Error("Sisi yang disi tidak boleh 0"))
        if(isNaN(samping) || isNaN(depan))
          reject(new Error("Hanya bisa diisi angka"))
        resolve(Math.sqrt(samping**2 * depan**2))
    },1000)
  })
}

const cetak = async () => {
  try {
    console.log("Ini adalah hasil", await Phytagoras(0,4))
  } catch (error) {
    console.log("Ini error",error.message)
  }
}
cetak()

// divide(10, 1)
//   .then((res) => console.log("ini hasil", res))
//   .catch((err) => console.log(err));

// const execute = async () => {
//   try {
//     const hasil = await divide(10, 2);
//     console.log("Ini hasil async", hasil);
//   } catch (error) {
//     console.log("Ini error", error.message);
//   }
// };


// execute();
