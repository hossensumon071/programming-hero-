// syntactic sugar
class teamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location
    }
    feedBack(){
        console.log(`${this.name} thank you for your feedback`)
    }
}
class Instructor extends teamMember{
    designation = 'web course Instructor';
    team = 'web team';
    tech;
    constructor(name, location){
       super(name, location)
    }
    developFetures(feature){
        console.log(`Please develop the features ${feature}`)
    }
    release(version){
        console.log(`please create quiz for module ${version}`)
    }
    
}

const aamir = new Instructor('amir', 'isatmbul');

class jobPlacement extends teamMember{
    designation = 'Job Placement commands';
    team = 'web team';
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech
    }
    provideResume(feature){
        console.log(`Please develop the features ${feature}`)
    }
    prepareStudent(version){
        console.log(`please create quiz for module ${version}`)
    }
    feedBack(){
        console.log(`${this.name} thank you for your feedback`)
    }
}
