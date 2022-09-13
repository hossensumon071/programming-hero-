const students = {
    name: 'kolim uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78, 
        physics: 89, 
        chemistry: 65, 
    }
}

const marke = students.marks
const math = students.marks.math


const chemistry = students['marks']['chemistry']

const subject = 'math'
const subjectMarks = students.marks[subject]