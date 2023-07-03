export default function getStudentsByLocation(students, city) {
    // here is your damn comment
    if (Object.getPrototypeOf(students) === Array.prototype) {
        return students.filter((items) => items.location === city);
    }
    return [];
}
