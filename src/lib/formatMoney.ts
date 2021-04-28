export const formatMoney =(nilai : any) =>{
    if(nilai!== null){
     return (nilai).toLocaleString('en-US', {
         style: 'currency',
         currency: 'IDR',
       });
     }else{
         return 0
     }
 }