const options = {
    method: 'GET',
    url: 'https://numbersapi.p.rapidapi.com/6/21/date',
    params: {
      fragment: 'true',
      json: 'true'
    },
    headers: {
      'X-RapidAPI-Key': '676ff81ff6mshddfa055d127a7e6p1d1638jsnb17c1c9a5c03',
      'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    }
  };


let bl = document.querySelector('.bl');

 
  


  let l =async () =>{
    try {
        const response = await axios.request(optionsLove);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
  
}


let   i1 = document.querySelector('.i1').value;
let  i2 = document.querySelector('.i2').value;
  bl.addEventListener('click',async ()=>{

    
     i1 = document.querySelector('.i1').value;
     i2 = document.querySelector('.i2').value;
console.log(i1);
console.log(i2);

  l();


  });
  const optionsLove = {
    method: 'GET',
    url: 'https://love-calculator.p.rapidapi.com/getPercentage',
    params: {
      sname: "psd",
      fname: i2
    },
    headers: {
      'X-RapidAPI-Key': '676ff81ff6mshddfa055d127a7e6p1d1638jsnb17c1c9a5c03',
      'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    }
  };



  const optionsMath = {
    method: 'GET',
    url: 'https://numbersapi.p.rapidapi.com/random/trivia',
    params: {
      min: '10',
      max: '20',
      fragment: 'true',
      json: 'true'
    },
    headers: {
      'X-RapidAPI-Key': '676ff81ff6mshddfa055d127a7e6p1d1638jsnb17c1c9a5c03',
      'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    }
  };
  
  const optionsYear = {
    method: 'GET',
    url: 'https://numbersapi.p.rapidapi.com/1492/year',
    params: {
      fragment: 'true',
      json: 'true'
    },
    headers: {
      'X-RapidAPI-Key': '676ff81ff6mshddfa055d127a7e6p1d1638jsnb17c1c9a5c03',
      'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    }
  };
  
 
 





  
 let btn = document.querySelector('button');
 let b2 = document.querySelector('.b2');
 let b3 = document.querySelector('.b3');
 let h = document.querySelector('h1');
 let s = document.querySelector('span');

 let m = async ()=>{
    try {
        const response = await axios.request(optionsMath);
       
        h.innerText = response.data.text;
        s.innerText = "number:  "+response.data.number;
    } catch (error) {
        console.error(error);
    }
  }


  let y = async ()=>{
    try {
        const response = await axios.request(optionsYear);
       
        h.innerText = response.data.text;
        s.innerText = "number:  "+response.data.number;
    } catch (error) {
        console.error(error);
    }
  }




let k = async ()=>{
  try {
      const response = await axios.request(options);
      
      h.innerText = response.data.text;
      s.innerText = "year:  "+response.data.year;
  } catch (error) {
      console.error(error);
  }}












btn.addEventListener('click',()=>{

    m();
})

b2.addEventListener('click',()=>{
   
    k();
})

b3.addEventListener('click',()=>{
   
    y();
})
