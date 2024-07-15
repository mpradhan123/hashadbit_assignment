let students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

let result = students.map(studentObj => {
    let studentName = Object.keys(studentObj)[0];
    let scores = studentObj[studentName];
    let sum = Object.values(scores).reduce((acc, score) => acc + score, 0);
    let average = sum / Object.keys(scores).length;
    return {
        [studentName]: {
            average: average
        }
    };
});

console.log(result);
