import { describe, it, expect, beforeEach } from 'vitest';
import { Person } from './Person'
import { PersonStatistics } from './PersonStatistics'

describe('PersonStatistics', () => {
    let people: Person[];
    let personStats: PersonStatistics;

    beforeEach(() => {
        people = [
            { id: 1, name: 'Alice', age: 25, isStudent: true, score: 85 },
            { id: 2, name: 'Bob', age: 30, isStudent: false, score: 75 },
            { id: 3, name: 'Charlie', age: 22, isStudent: true, score: 95 },
            { id: 4, name: 'David', age: 28, isStudent: true, score: 35 },
            { id: 5, name: 'Eve', age: 26, isStudent: false, score: 50 }
        ];
        personStats = new PersonStatistics(people);
    });

    it('should calculate the average age correctly', () => {
        expect(personStats.getAverageAge()).toBeCloseTo(26.2);
    });

    it('should return the correct number of students', () => {
        expect(personStats.getNumberOfStudents()).toBe(3);
    });

    it('should return the person with the highest score', () => {
        expect(personStats.getPersonWithHighestScore()).toEqual(people[2]);
    });

    it('should calculate the average score of students correctly', () => {
        expect(personStats.getAverageScoreOfStudents()).toBeCloseTo(71.67, 2);
    });

    it('should return the oldest student', () => {
        expect(personStats.getOldestStudent()).toEqual(people[3]);
    });

    it('should return true if anyone is failing', () => {
        expect(personStats.isAnyoneFailing()).toBe(true);
    });

    it('should return false if no one is failing', () => {
        personStats.people = [
            { id: 1, name: 'Alice', age: 25, isStudent: true, score: 85 },
            { id: 2, name: 'Bob', age: 30, isStudent: false, score: 75 },
            { id: 3, name: 'Charlie', age: 22, isStudent: true, score: 95 }
        ];
        expect(personStats.isAnyoneFailing()).toBe(false);
    });

    it('should handle an empty list correctly', () => {
        personStats.people = [];
        expect(personStats.getAverageAge()).toBe(0);
        expect(personStats.getNumberOfStudents()).toBe(0);
        expect(personStats.getPersonWithHighestScore()).toBeNull();
        expect(personStats.getAverageScoreOfStudents()).toBe(0);
        expect(personStats.getOldestStudent()).toBeNull();
        expect(personStats.isAnyoneFailing()).toBe(false);
    });
});