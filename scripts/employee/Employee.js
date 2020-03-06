const Employee = (employee) => {
    return `
        <div class="employee">
            <div class="employee__first__name">${employee.firstName} ${employee.lastName}</div>
            <div class="employee__job__title">Job Title: ${employee.jobTitle}</div>
            <div class="employee__hours__scheduled">Hours Scheduled: ${employee.hoursScheduled}</div>
        </div>
    `
}

export default Employee