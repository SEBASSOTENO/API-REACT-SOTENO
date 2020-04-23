module.exports = () =>{
    const data = {
        users:[]
    }
    const totalUsers = 20;
    for (let i = 0; i < totalUsers; i++) {
        data.users.push({
            id: i,
            name: `user${i}`,
        });
    }
    return data
}