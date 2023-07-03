export default function getStudentsByLocation(students, city) {
    // checks if arg paased in an array
    if (Object.getPrototypeOf(students) === Array.prototype) {
        return students.filter((items) => items.location === city);
    }
    return [];
}
