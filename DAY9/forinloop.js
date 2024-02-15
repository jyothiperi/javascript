var info = {
    id : 101,
    name : 'sree peri',
    city : 'stockholm',
    gender : 'female',
};

for (var props in info){
    console.log(props, ':',info[props]);
}