import { 
  StudentProfile, 
  PlacementOfficerProfile, 
  OpportunityType,
  UserRole
} from './types';

// Student Profiles (Simplified - removed mentor field)
export const studentProfiles: StudentProfile[] = [
  {
    id: 'STU001',
    name: 'Priya Sharma',
    email: 'priya.sharma@college.edu',
    phone: '+91 98765 43210',
    department: 'Computer Science',
    major: 'Computer Science & Engineering',
    year: 3,
    semester: 6,
    cgpa: 8.7,
    skills: [
      { name: 'React.js', level: 'Advanced', verified: true },
      { name: 'Node.js', level: 'Intermediate', verified: true },
      { name: 'Python', level: 'Advanced', verified: true },
      { name: 'Machine Learning', level: 'Intermediate', verified: false },
      { name: 'SQL', level: 'Advanced', verified: true }
    ],
    resume: '/resumes/priya-sharma.pdf',
    coverLetter: '/cover-letters/priya-sharma.pdf',
    preferences: {
      industries: ['Technology', 'Finance', 'Healthcare'],
      locations: ['Bangalore', 'Hyderabad', 'Pune'],
      stipendRange: { min: 15000, max: 30000 },
      opportunityTypes: [OpportunityType.INTERNSHIP, OpportunityType.PLACEMENT]
    },
    completedInternships: 1,
    placementStatus: 'in-process',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 'STU002',
    name: 'Rahul Verma',
    email: 'rahul.verma@college.edu',
    phone: '+91 98765 43211',
    department: 'Electronics',
    major: 'Electronics & Communication Engineering',
    year: 4,
    semester: 7,
    cgpa: 7.9,
    skills: [
      { name: 'Embedded Systems', level: 'Advanced', verified: true },
      { name: 'C/C++', level: 'Advanced', verified: true },
      { name: 'PCB Design', level: 'Intermediate', verified: true },
      { name: 'IoT', level: 'Intermediate', verified: false },
      { name: 'MATLAB', level: 'Intermediate', verified: true }
    ],
    resume: '/resumes/rahul-verma.pdf',
    preferences: {
      industries: ['Electronics', 'Automotive', 'Manufacturing'],
      locations: ['Chennai', 'Bangalore', 'Mumbai'],
      stipendRange: { min: 12000, max: 25000 },
      opportunityTypes: [OpportunityType.INTERNSHIP, OpportunityType.PLACEMENT]
    },
    completedInternships: 0,
    placementStatus: 'unplaced',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: 'STU003',
    name: 'Ananya Patel',
    email: 'ananya.patel@college.edu',
    phone: '+91 98765 43212',
    department: 'Mechanical',
    major: 'Mechanical Engineering',
    year: 3,
    semester: 5,
    cgpa: 8.2,
    skills: [
      { name: 'CAD/CAM', level: 'Advanced', verified: true },
      { name: 'SolidWorks', level: 'Advanced', verified: true },
      { name: 'AutoCAD', level: 'Intermediate', verified: true },
      { name: 'Thermal Engineering', level: 'Intermediate', verified: false },
      { name: 'Project Management', level: 'Beginner', verified: false }
    ],
    resume: '/resumes/ananya-patel.pdf',
    preferences: {
      industries: ['Manufacturing', 'Automotive', 'Aerospace'],
      locations: ['Pune', 'Bangalore', 'Delhi'],
      stipendRange: { min: 10000, max: 20000 },
      opportunityTypes: [OpportunityType.INTERNSHIP, OpportunityType.PLACEMENT]
    },
    completedInternships: 2,
    placementStatus: 'unplaced',
    avatar: 'https://i.pravatar.cc/150?img=25'
  },
  {
    id: 'STU004',
    name: 'Karan Singh',
    email: 'karan.singh@college.edu',
    phone: '+91 98765 43213',
    department: 'Computer Science',
    major: 'Computer Science & Engineering',
    year: 2,
    semester: 4,
    cgpa: 9.1,
    skills: [
      { name: 'Java', level: 'Advanced', verified: true },
      { name: 'Spring Boot', level: 'Intermediate', verified: true },
      { name: 'Microservices', level: 'Intermediate', verified: false },
      { name: 'Kubernetes', level: 'Beginner', verified: false },
      { name: 'AWS', level: 'Intermediate', verified: true }
    ],
    resume: '/resumes/karan-singh.pdf',
    preferences: {
      industries: ['Technology', 'E-commerce', 'Fintech'],
      locations: ['Bangalore', 'Mumbai', 'Hyderabad'],
      stipendRange: { min: 20000, max: 40000 },
      opportunityTypes: [OpportunityType.INTERNSHIP, OpportunityType.PLACEMENT]
    },
    completedInternships: 0,
    placementStatus: 'unplaced',
    avatar: 'https://i.pravatar.cc/150?img=33'
  },
  {
    id: 'STU005',
    name: 'Sneha Reddy',
    email: 'sneha.reddy@college.edu',
    phone: '+91 98765 43214',
    department: 'Civil',
    major: 'Civil Engineering',
    year: 4,
    semester: 8,
    cgpa: 7.6,
    skills: [
      { name: 'Structural Analysis', level: 'Advanced', verified: true },
      { name: 'AutoCAD', level: 'Advanced', verified: true },
      { name: 'Revit', level: 'Intermediate', verified: true },
      { name: 'Project Planning', level: 'Intermediate', verified: false },
      { name: 'Quantity Surveying', level: 'Intermediate', verified: true }
    ],
    resume: '/resumes/sneha-reddy.pdf',
    preferences: {
      industries: ['Construction', 'Infrastructure', 'Real Estate'],
      locations: ['Hyderabad', 'Chennai', 'Bangalore'],
      stipendRange: { min: 8000, max: 15000 },
      opportunityTypes: [OpportunityType.INTERNSHIP, OpportunityType.PLACEMENT]
    },
    completedInternships: 1,
    placementStatus: 'placed',
    avatar: 'https://i.pravatar.cc/150?img=44'
  }
];

// Placement Officer Profiles
export const placementOfficers: PlacementOfficerProfile[] = [
  {
    id: 'PLO001',
    name: 'Dr. Rajesh Kumar',
    email: 'rajesh.kumar@college.edu',
    phone: '+91 98765 99001',
    department: 'Training & Placement Cell',
    role: UserRole.PLACEMENT_OFFICER,
    managedDepartments: ['Computer Science', 'Electronics', 'Information Technology'],
    yearsOfExperience: 12,
    avatar: 'https://i.pravatar.cc/150?img=59'
  },
  {
    id: 'PLO002',
    name: 'Ms. Shalini Iyer',
    email: 'shalini.iyer@college.edu',
    phone: '+91 98765 99002',
    department: 'Training & Placement Cell',
    role: UserRole.PLACEMENT_OFFICER,
    managedDepartments: ['Mechanical', 'Civil', 'Chemical'],
    yearsOfExperience: 8,
    avatar: 'https://i.pravatar.cc/150?img=47'
  }
];

// Only 2 user types: STUDENT and PLACEMENT_OFFICER
// Removed: FacultyMentor, Employer, TrainingSupervisor roles

export const getAllProfiles = () => ({
  students: studentProfiles,
  placementOfficers
});
