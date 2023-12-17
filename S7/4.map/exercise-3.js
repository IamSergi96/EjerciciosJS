const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];
const citynames = cities.map((city)=>{
    if(city.isVisited == true){
        city.name = city.name + "(Visited)";
    }
    return city.name;
})
console.log(citynames);
