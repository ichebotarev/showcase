class Project {
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
}

const ProjectInfoList = [
    new Project("E-Saggila - My World My Way Vinyl Record Design", "I designed the Vinyl cover, sticker and insert"),
    new Project("Puppy Tapes", "Tape Cover Design for Release"),
    new Project("Post Hoc", "Logo and Brand design, vinyl records, shirts, releases"),
    new Project("Centrovisione", "Design for Vinyl Release"),
    new Project("Ectopic", "Label Branding Design, Vinyl Release Cover"),
    new Project("Cultivated Sound", "Created various collages as scans for use as backdrops for their website"),

]


const getData = () => {
	return ProjectInfoList;
};

export { getData };