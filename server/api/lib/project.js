const { init } = require('./initdb');

class Project {
    constructor(data){
        this.title = data.title;
        this.description = data.description;
        this.img = data.img;
        this.tags = data.tags;
        this.repo = data.repo;
        this.deploy = data.deploy;
    }
    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();               
                const dbData = await db.collection('Projects');
                const more = await  dbData.find({}).toArray();
                const projects = more.map(d => new Project(d))
                if (!projects.length) { throw new Error('No projects here!')}
                resolve(projects);
            } catch (err) {
                reject(`Error retrieving projects: ${err.message}`)
            }
        })
    }
}

module.exports = Project;