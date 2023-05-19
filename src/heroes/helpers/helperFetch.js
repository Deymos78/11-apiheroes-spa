import { json } from "react-router-dom";

export const helperFetch = async() => {

    let url='https://www.superheroapi.com/api.php/244145151627647/';
    
   
    let arrayobj =[];

    let arrayUrls = [];

    for (let index = 0; index < 30; index++) {
        let aux = (index+1).toString();
        arrayUrls=[...arrayUrls,url+aux]; 
    }
    
    const fetchPromised = arrayUrls.map(url => fetch(url));

    await Promise.all(fetchPromised).
        then(responses =>{
            const dataPromises = responses.map( respose => respose.json());

            return Promise.all(dataPromises);
           
    }).
    then(results =>{
        results.forEach(data =>{
            if (data.biography.publisher == 'Marvel Comics'){
                let obj ={id: data.id,
                    name: data.name,
                    img: data.image.url,
                    first_appearance: data.biography.first_appearance,
                    publisher: data.biography.publisher,
                    alignment: data.biography.alignment
                }
                arrayobj = [...arrayobj, obj]
            } 
            
            
        })
        

    }).
    catch(error => {
        console.log(error);
    })
   
  return arrayobj;
}
