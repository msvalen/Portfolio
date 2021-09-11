const { init } = require('./initdb');

class Experience {
    constructor(data){
        this.place = data.place;
        this.position = data.position;
        this.start_date = data.start_date;
        this.end_date = data.end_date;
    }
    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
               
                const dbData = await db.collection('Resume');
                const more = await  dbData.find({}).toArray();
                const resume = more.map(d => new Experience(d))
                if (!resume.length) { throw new Error('No experience here!')}
                resolve(resume);
            } catch (err) {
                reject(`Error retrieving dogs: ${err.message}`)
            }
        })
    }
}

module.exports = Experience;