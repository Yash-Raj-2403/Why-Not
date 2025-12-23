export enum ApplicationStatus {
  APPLIED = 'APPLIED',
  SHORTLISTED = 'SHORTLISTED',
  INTERVIEW_SCHEDULED = 'INTERVIEW_SCHEDULED',
  REJECTED = 'REJECTED',
  OFFERED = 'OFFERED',
  ACCEPTED = 'ACCEPTED',
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  COMPLETED = 'COMPLETED'
}

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  avatar?: string;
  department?: string;
  notifications?: number;
}

export enum UserRole {
  STUDENT = 'STUDENT',
  PLACEMENT_OFFICER = 'PLACEMENT_OFFICER',
  FACULTY_MENTOR = 'FACULTY_MENTOR',
  EMPLOYER = 'EMPLOYER',
  TRAINING_SUPERVISOR = 'TRAINING_SUPERVISOR',
  ADMIN = 'ADMIN'
}

export enum OpportunityType {
  INTERNSHIP = 'INTERNSHIP',
  INDUSTRIAL_TRAINING = 'INDUSTRIAL_TRAINING',
  PLACEMENT = 'PLACEMENT'
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  verified?: boolean;
}

export interface StudentProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  major: string;
  year: number;
  semester: number;
  cgpa: number;
  skills: Skill[];
  resume?: string;
  coverLetter?: string;
  preferences: {
    industries: string[];
    locations: string[];
    stipendRange: { min: number; max: number };
    opportunityTypes: OpportunityType[];
  };
  mentor?: string;
  completedInternships: number;
  placementStatus: 'unplaced' | 'placed' | 'in-process';
  avatar?: string;
}

export interface PlacementOfficerProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  role: UserRole.PLACEMENT_OFFICER;
  managedDepartments: string[];
  yearsOfExperience: number;
  avatar?: string;
}

export interface FacultyMentorProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  role: UserRole.FACULTY_MENTOR;
  specialization: string[];
  mentees: string[]; // student IDs
  avatar?: string;
}

export interface EmployerProfile {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  industry: string;
  website?: string;
  location: string;
  verified: boolean;
  role: UserRole.EMPLOYER;
  logo?: string;
}

export interface TrainingSupervisorProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  companyId: string;
  department: string;
  role: UserRole.TRAINING_SUPERVISOR;
  assignedInterns: string[]; // student IDs
  avatar?: string;
}

export interface JobOpportunity {
  id: string;
  role: string;
  company: string;
  companyId: string;
  logoUrl?: string;
  type: OpportunityType;
  department: string;
  requiredSkills: Skill[];
  minCgpa: number;
  description: string;
  responsibilities: string[];
  eligibility: string[];
  stipendRange?: { min: number; max: number };
  duration: string;
  location: string;
  deadline: string;
  postedDate: string;
  slots: number;
  filledSlots: number;
  placementConversion: boolean;
  status: 'active' | 'closed' | 'draft';
  postedBy: string; // employer ID
}

export interface Application {
  id: string;
  jobId: string;
  job: JobOpportunity;
  studentId: string;
  student: StudentProfile;
  status: ApplicationStatus;
  appliedDate: string;
  mentorApproval?: {
    status: 'pending' | 'approved' | 'rejected';
    mentorId: string;
    comments?: string;
    date?: string;
  };
  interviewSchedule?: {
    date: string;
    time: string;
    mode: 'online' | 'offline';
    location?: string;
    meetingLink?: string;
  };
  feedback?: {
    supervisorId: string;
    rating: number;
    comments: string;
    skillsAcquired: string[];
    certificateGenerated: boolean;
    date: string;
  };
  rejectionReason?: string;
  offerDetails?: {
    stipend: number;
    joiningDate: string;
    duration: string;
  };
}

export interface ExplanationRequest {
  studentName: string;
  studentSkills: string[];
  studentCgpa: number;
  jobRole: string;
  jobCompany: string;
  jobRequiredSkills: string[];
  jobMinCgpa: number;
}