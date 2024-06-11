import { Person } from './Person'

export class PersonStatistics {
    private _people: Person[];

    constructor(people: Person[]) {
        if (people === null) {
            throw new Error("People list cannot be null");
        }
        this._people = people;
    }

    public get people(): Person[] {
        return this._people;
    }

    public set people(value: Person[]) {
        if (value === null) {
            throw new Error("People list cannot be null");
        }
        this._people = value;
    }

    public getAverageAge(): number {
        const totalAge = this._people.reduce((sum, person) => sum + person.age, 0);
        return this._people.length === 0 ? 0 : totalAge / this._people.length;
    }

    public getNumberOfStudents(): number {
        return this._people.filter(person => person.isStudent).length;
    }

    public getPersonWithHighestScore(): Person | null {
        if (this._people.length === 0) {
            return null;
        }
        return this._people.reduce((max, person) => person.score > max.score ? person : max);
    }

    public getAverageScoreOfStudents(): number {
        const students = this._people.filter(person => person.isStudent);
        const totalScore = students.reduce((sum, student) => sum + student.score, 0);
        return students.length === 0 ? 0 : totalScore / students.length;
    }

    public getOldestStudent(): Person | null {
        const students = this._people.filter(person => person.isStudent);
        if (students.length === 0) {
            return null;
        }
        return students.reduce((oldest, student) => student.age > oldest.age ? student : oldest);
    }

    public isAnyoneFailing(): boolean {
        return this._people.some(person => person.score < 40);
    }
}