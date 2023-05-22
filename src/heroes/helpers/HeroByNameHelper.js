export const HeroByName = async(name = '') => {
    console.log('Estas en el HeroByName')
    console.log('Aqui el nombre'+name);


    // let url='https://www.superheroapi.com/api.php/244145151627647/';
    let url=`https://superheroapi.com/api.php/244145151627647/search/${name}`;
    console.log(url);


    const resp = await fetch(url);
    console.log(resp);

    const {results} = await resp.json();


    console.log('AQUI ESTAN LOS RESULTADOS DE LA PETICION');
    console.log(results);
    console.log(!!results);
    let heroesname = {};

    if(!!results){
      heroesname = results.map(hero => ({
          id: hero.id,
          name: hero.name,
          img: hero.image.url,
          first_appearance: hero.biography.first_appearance,
          publisher: hero.biography.publisher,
          alignment: hero.biography.alignment
      }));

    }else{
      return [];

    }
    
    

    // console.log(heroesname);
   
  return heroesname;
}