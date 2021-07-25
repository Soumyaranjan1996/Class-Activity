function helpFn(){
    console.log(`
    List of All the commands:
                node main.js tree "directoryPath"
                node main.js organize "directoryPath"
                node main.js help
                `);
}
//code export
module.exports = {
    helpFxn: helpFn
}