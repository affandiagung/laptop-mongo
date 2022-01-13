const Phytagoras = (samping,depan,cb) =>{
  setTimeout(()=> {
    if ( samping ==0 || depan==0) {
      err = new Error("Sisi tidak boleh 0")
      cb(err)
    }
    if( isNaN(samping)||isNaN(depan)){
      err = new Error("Hanya bisa memproses angka");
      cb(err)
    }
    const hasil = Math.sqrt(samping**2 + depan **2)
    cb( null,hasil)
    
  })
  }
  
  
  Phytagoras(3,"A", (err,hasil)=>{
    if(err){
      throw new Error(err)
    }
    console.log(hasil)
  })
  