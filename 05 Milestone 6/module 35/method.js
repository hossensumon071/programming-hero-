const students = {
    name: 'kodom ali',
    money: 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        // console.log(this.name, 'is participating in an exam')
        return this.name + 'is participating in an exam';
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDay: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money
    }
}

const output = students.exam()
console.log(output);
const reExam = students.improveExam('algebra');
console.log(reExam);
const remaining = students.treatDay(900, 100);
console.log(remaining)