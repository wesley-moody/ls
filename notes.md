## Workflow

- create repo > clone it
- add .gitignore
- add package.json
- update test script to use jest
- add "jest" configuration to package.json
- add "server" and "start" scripts to package.json

## Features

- list of cohorts
- add a cohort
- list of cohort's students
- add a student
- list of student's cohorts

|FEATURE |METHOD |URL |
|:--|:--:|:--|
|LIST cohorts |GET |/api/cohorts|
|ADD a cohort |POST |/api/cohorts | 
|VIEW cohort's students |GET |/api/cohorts/:id/students | 
|LIST of students |GET |api/students | 
|ADD a student |POST |/api/students | 
|VIEW a student's cohorts |GET |/api/students/:id/cohorts | 

  ## Cohorts

- id
- name
- start date

  ## Students

  - id
  - name
  - email

## Testing

- functions: invoke the function with optional args => check return
- endpoints: make a req w/ optional args => 
- 