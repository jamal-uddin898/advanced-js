const students = [
    {id: 21, name:'Omar'},
    {id: 31, name:'Mannaaaaa'},
    {id: 41, name:'vidal'},
    {id: 71, name:'DeepJol'}
]

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);