// CODE here for your Lambda Classes
class Person {
    constructor(essentialInfo) {
        this.name = essentialInfo.name;
        this.age = essentialInfo.age;
        this.location = essentialInfo.location
    }

    speak() {
        return `Hello, my name is ${this.name} and I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instructorInfo) {
        super(instructorInfo)
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }

    gradeChange(studentGrade) {
        let addorsubtract = Math.random()
        if(addorsubtract < .5) {
            return studentGrade + (Math.random() * 10)
        } else {
            return studentGrade - (Math.random() * 10)
        }
    } 
}

class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo)
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
        this.grade = studentInfo.grade
    }


    listsSubjects() {
        this.favSubjects.forEach(function(subject) {
            console.log(subject);
        });
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }

    graduate() {
        if(this.grade >= 70) {
            return `Congrats, you have graduated!`
        } else {
            return `You still have some work to do!`
        }
    }
}

class ProjectManager extends Instructor {
    constructor(PMInfo) {
        super(PMInfo);
        this.gradClassName = PMInfo.gradClassName;
        this.favInstructor = PMInfo.favInstructor;
    }

    standup(channel) {
        return `${this.name} announces to ${channel} @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const connor = new Instructor({
    name: 'Connor',
    location: 'NE Portland',
    age: 35,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Do what is right.`
  });

  const nick = new Student({
    name: 'Nick',
    location: 'Portland',
    age: 23,
    previousBackground: "Loves to game.",
    className: "WebPT7",
    favSubjects: ["Science", "English"],
    grade: 70
  });

  const marcus = new Student({
    name: 'Marcus',
    location: 'Chicago',
    age: 23,
    previousBackground: "Loves to be a jerk.",
    className: "WebPT8",
    favSubjects: ["Science", "Math"],
    grade: 60
  });

  const andrew = new ProjectManager({
    name: 'Andrew',
    location: 'Joliet',
    age: 24,
    gradClassName: "Web3",
    favInstructor: "Dan",
    favLanguage: 'C#',
    specialty: 'Front-end',
    catchPhrase: 'Im a cool kid.'
  });

  const jc = new ProjectManager({
    name: 'JC',
    location: 'Beaverton',
    age: 26,
    gradClassName: "Web5",
    favInstructor: "Sean",
    favLanguage: 'Ruby',
    specialty: 'Back-end',
    catchPhrase: `Things and Stuff.`
  });

  console.log(jc);
  console.log(andrew);
  console.log(marcus);
  console.log(connor);
  console.log(nick);
  console.log(fred);

  console.log(jc.speak())
  console.log(andrew.demo(`arrays`))
  console.log(marcus.PRAssignment(`java`))
  console.log(andrew.standup(`here`))
nick.listsSubjects()
nick.grade = connor.gradeChange(nick.grade)
console.log(nick.graduate())

