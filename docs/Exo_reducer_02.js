
// Ajouter un sport à Zaza
const action = {
    type: 'student/addSport',
    payload: {
        sectionId: 'JS',
        studentId: 1,
        sports: ['Course Automobile', 'Karting']
    }
}

// Return du reducer ?
function demo(state, action) {

    const { studentId, sectionId, sports } = action.payload;

    return {
        ...state,
        sections: state.sections.map(section => section.name !== sectionId ? section : ({
            ...section,
            students: section.students.map(student => student.id !== studentId ? student : ({
                ...student,
                sports: [
                    ...student.sport,
                    ...sports
                ]
            }))
        }))
    };
}






