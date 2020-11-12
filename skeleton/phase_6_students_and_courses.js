function Student(fn, ln) {
    this.fn = fn;
    this.ln = ln;
    this.courses = [];
}

Student.prototype.name = function() {
    console.log(`${this.fn} ${this.ln}`);
}

Student.prototype.enroll = function(course) {
    this.hasConflict(course);
    if (this.courses.indexOf(course) === -1 ) {
        this.courses.push(course);
        course.addStudent(this);
    }
}

Student.prototype.courseLoad = function () {
    let results = {};
    this.courses.forEach(course => {
        results[course.department] += course.credits;
    });
    console.log(results);
    return results;
}

function Course(name, department, credits, day, time) {
    this.name = name;
    this.department = department;
    this.credits = credits;
    this.day = day; //! could be an arr!!!
    this.time = time;
    this.students = [];
}

Course.prototype.addStudent = function (student) {
    if (this.students.indexOf(student) === -1) {
        this.students.push(student);
    }
}

Course.prototype.conflictsWith = function (course) {
    this.day.forEach(d => {
        if (course.day.includes(d)) {
            if (this.time === course.time) {
                return true;
            }
        }
    });
    return false;
}

Student.prototype.hasConflict = function (course) {
    this.courses.forEach( c => {
        if (c.conflictsWith(course)) {
            console.log("Classes CONFLICT!")
        }
    });    
}

let student1 = new Student('michael', 'c')
let course1 = new Course('001', 'ruby', 99, ['mon', 'wed'], 2)
let course2 = new Course('002', 'rails', 91, ['tues', 'wed'], 2)
student1.enroll(course1)
student1.enroll(course2)