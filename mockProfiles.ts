import { 
  StudentProfile, 
  PlacementOfficerProfile, 
  FacultyMentorProfile, 
  EmployerProfile, 
  OpportunityType,
  UserRole
} from './types';

// Student Profiles
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
    mentor: 'FAC001',
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
      opportunityTypes: [OpportunityType.INDUSTRIAL_TRAINING, OpportunityType.PLACEMENT]
    },
    mentor: 'FAC002',
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
      opportunityTypes: [OpportunityType.INTERNSHIP, OpportunityType.INDUSTRIAL_TRAINING]
    },
    mentor: 'FAC003',
    completedInternships: 0,
    placementStatus: 'unplaced',
    avatar: 'https://i.pravatar.cc/150?img=25'
  },
  {
    id: 'STU004',
    name: 'Karan Singh',
    email: 'karan.singh@college.edu',
    phone: '+91 98765 43213',
    department: 'Computer Science',
    major: 'Information Technology',
    year: 4,
    semester: 8,
    cgpa: 9.1,
    skills: [
      { name: 'Full Stack Development', level: 'Advanced', verified: true },
      { name: 'Cloud Computing', level: 'Advanced', verified: true },
      { name: 'DevOps', level: 'Intermediate', verified: true },
      { name: 'Kubernetes', level: 'Intermediate', verified: true },
      { name: 'System Design', level: 'Advanced', verified: false }
    ],
    resume: '/resumes/karan-singh.pdf',
    coverLetter: '/cover-letters/karan-singh.pdf',
    preferences: {
      industries: ['Technology', 'Cloud Services', 'Startups'],
      locations: ['Bangalore', 'Gurgaon', 'Mumbai'],
      stipendRange: { min: 20000, max: 40000 },
      opportunityTypes: [OpportunityType.PLACEMENT, OpportunityType.INTERNSHIP]
    },
    mentor: 'FAC001',
    completedInternships: 2,
    placementStatus: 'placed',
    avatar: 'https://i.pravatar.cc/150?img=33'
  },
  {
    id: 'STU005',
    name: 'Sneha Reddy',
    email: 'sneha.reddy@college.edu',
    phone: '+91 98765 43214',
    department: 'Civil',
    major: 'Civil Engineering',
    year: 3,
    semester: 6,
    cgpa: 7.5,
    skills: [
      { name: 'Structural Analysis', level: 'Intermediate', verified: true },
      { name: 'AutoCAD', level: 'Advanced', verified: true },
      { name: 'Construction Management', level: 'Beginner', verified: false },
      { name: 'Surveying', level: 'Intermediate', verified: true },
      { name: 'STAAD Pro', level: 'Intermediate', verified: true }
    ],
    resume: '/resumes/sneha-reddy.pdf',
    preferences: {
      industries: ['Construction', 'Infrastructure', 'Real Estate'],
      locations: ['Hyderabad', 'Bangalore', 'Chennai'],
      stipendRange: { min: 8000, max: 18000 },
      opportunityTypes: [OpportunityType.INDUSTRIAL_TRAINING, OpportunityType.INTERNSHIP]
    },
    mentor: 'FAC004',
    completedInternships: 1,
    placementStatus: 'in-process',
    avatar: 'https://i.pravatar.cc/150?img=45'
  }
];

// Placement Officer Profiles
export const placementOfficers: PlacementOfficerProfile[] = [
  {
    id: 'PLO001',
    name: 'Dr. Rajesh Kumar',
    email: 'rajesh.kumar@college.edu',
    phone: '+91 98765 00001',
    department: 'Training & Placement Cell',
    role: UserRole.PLACEMENT_OFFICER,
    managedDepartments: ['Computer Science', 'Electronics', 'Information Technology'],
    yearsOfExperience: 12,
    avatar: 'https://i.pravatar.cc/150?img=60'
  },
  {
    id: 'PLO002',
    name: 'Ms. Sunita Desai',
    email: 'sunita.desai@college.edu',
    phone: '+91 98765 00002',
    department: 'Training & Placement Cell',
    role: UserRole.PLACEMENT_OFFICER,
    managedDepartments: ['Mechanical', 'Civil', 'Chemical'],
    yearsOfExperience: 8,
    avatar: 'https://i.pravatar.cc/150?img=47'
  }
];

// Faculty Mentor Profiles
export const facultyMentors: FacultyMentorProfile[] = [
  {
    id: 'FAC001',
    name: 'Prof. Amit Mehta',
    email: 'amit.mehta@college.edu',
    phone: '+91 98765 10001',
    department: 'Computer Science',
    role: UserRole.FACULTY_MENTOR,
    specialization: ['Software Engineering', 'Data Science', 'Artificial Intelligence'],
    mentees: ['STU001', 'STU004'],
    avatar: 'https://i.pravatar.cc/150?img=68'
  },
  {
    id: 'FAC002',
    name: 'Dr. Kavita Nair',
    email: 'kavita.nair@college.edu',
    phone: '+91 98765 10002',
    department: 'Electronics',
    role: UserRole.FACULTY_MENTOR,
    specialization: ['VLSI Design', 'Communication Systems', 'Embedded Systems'],
    mentees: ['STU002'],
    avatar: 'https://i.pravatar.cc/150?img=26'
  },
  {
    id: 'FAC003',
    name: 'Prof. Suresh Iyer',
    email: 'suresh.iyer@college.edu',
    phone: '+91 98765 10003',
    department: 'Mechanical',
    role: UserRole.FACULTY_MENTOR,
    specialization: ['Thermal Engineering', 'Manufacturing', 'Automobile Engineering'],
    mentees: ['STU003'],
    avatar: 'https://i.pravatar.cc/150?img=52'
  },
  {
    id: 'FAC004',
    name: 'Dr. Meera Joshi',
    email: 'meera.joshi@college.edu',
    phone: '+91 98765 10004',
    department: 'Civil',
    role: UserRole.FACULTY_MENTOR,
    specialization: ['Structural Engineering', 'Geotechnical Engineering', 'Transportation'],
    mentees: ['STU005'],
    avatar: 'https://i.pravatar.cc/150?img=38'
  }
];

// Employer Profiles
export const employers: EmployerProfile[] = [
  {
    id: 'EMP001',
    companyName: 'TechCorp Solutions',
    contactPerson: 'Mr. Vikram Malhotra',
    email: 'hr@techcorp.com',
    phone: '+91 80 2345 6789',
    industry: 'Information Technology',
    website: 'https://techcorp.com',
    location: 'Bangalore',
    verified: true,
    role: UserRole.EMPLOYER,
    logo: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=TC'
  },
  {
    id: 'EMP002',
    companyName: 'AutoDrive Industries',
    contactPerson: 'Ms. Priyanka Shah',
    email: 'careers@autodrive.in',
    phone: '+91 44 8765 4321',
    industry: 'Automotive',
    website: 'https://autodrive.in',
    location: 'Chennai',
    verified: true,
    role: UserRole.EMPLOYER,
    logo: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=AD'
  },
  {
    id: 'EMP003',
    companyName: 'BuildRight Construction',
    contactPerson: 'Mr. Anil Kapoor',
    email: 'hr@buildright.co.in',
    phone: '+91 40 9876 5432',
    industry: 'Construction',
    website: 'https://buildright.co.in',
    location: 'Hyderabad',
    verified: true,
    role: UserRole.EMPLOYER,
    logo: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=BR'
  },
  {
    id: 'EMP004',
    companyName: 'CloudNine Technologies',
    contactPerson: 'Ms. Neha Gupta',
    email: 'recruitment@cloudnine.io',
    phone: '+91 20 3456 7890',
    industry: 'Cloud Computing',
    website: 'https://cloudnine.io',
    location: 'Pune',
    verified: true,
    role: UserRole.EMPLOYER,
    logo: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=C9'
  },
  {
    id: 'EMP005',
    companyName: 'ElectroSys Private Ltd',
    contactPerson: 'Mr. Ravi Kumar',
    email: 'jobs@electrosys.com',
    phone: '+91 22 7654 3210',
    industry: 'Electronics',
    website: 'https://electrosys.com',
    location: 'Mumbai',
    verified: true,
    role: UserRole.EMPLOYER,
    logo: 'https://via.placeholder.com/150/800080/FFFFFF?text=ES'
  }
];

// Training Supervisor Profiles - REMOVED
export const trainingSupervisors = [];

export const getAllProfiles = () => ({
  students: studentProfiles,
  placementOfficers,
  facultyMentors,
  employers,
  trainingSupervisors
});
