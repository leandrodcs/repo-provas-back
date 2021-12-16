import { getManager } from 'typeorm';

async function listCourseTeachers(courseId: number) {
    const teachers = await getManager().query(`
        SELECT 
            teachers.name, teachers.id 
        FROM 
            teachers 
        JOIN 
            teachers_courses 
        ON 
            teachers.id = teachers_courses.teacher_id 
        WHERE 
            teachers_courses.course_id = $1
        ;`, [courseId]);

    return teachers;
}

export {
    listCourseTeachers,
};
