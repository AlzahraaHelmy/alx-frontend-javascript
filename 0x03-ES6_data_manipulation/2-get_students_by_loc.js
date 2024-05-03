export default function getStudentsByLocation(studentList, city) {
  return students.filter((stu) => stu.location === city);
}
