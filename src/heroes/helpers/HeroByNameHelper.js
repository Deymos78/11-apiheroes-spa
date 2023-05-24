export const HeroByName = async(name = '') => {


    let url=`https://superheroapi.com/api.php/244145151627647/search/${name}`;


    const resp = await fetch(url);

    const {results} = await resp.json();

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
    
   
  return heroesname;
}