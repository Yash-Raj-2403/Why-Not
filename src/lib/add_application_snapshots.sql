-- ============================================================================
-- APPLICATION SNAPSHOT MIGRATION
-- Prevents trust issues by freezing profile data at application time
-- ============================================================================

-- Add snapshot columns to applications table
ALTER TABLE public.applications 
ADD COLUMN IF NOT EXISTS snapshot_cgpa DECIMAL(4,2),
ADD COLUMN IF NOT EXISTS snapshot_skills JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS snapshot_resume_url TEXT,
ADD COLUMN IF NOT EXISTS snapshot_major TEXT,
ADD COLUMN IF NOT EXISTS snapshot_year INTEGER,
ADD COLUMN IF NOT EXISTS snapshot_semester INTEGER;

-- Add comment explaining the purpose
COMMENT ON COLUMN public.applications.snapshot_cgpa IS 'CGPA at time of application - used for rejection analysis to ensure consistency';
COMMENT ON COLUMN public.applications.snapshot_skills IS 'Skills with confidence levels at time of application - JSONB array of {name, confidence, evidence}';
COMMENT ON COLUMN public.applications.snapshot_resume_url IS 'Resume URL at time of application';
COMMENT ON COLUMN public.applications.snapshot_major IS 'Major at time of application';
COMMENT ON COLUMN public.applications.snapshot_year IS 'Year at time of application';
COMMENT ON COLUMN public.applications.snapshot_semester IS 'Semester at time of application';

-- Backfill existing applications with current profile data (one-time migration)
-- This ensures historical applications have snapshot data
UPDATE public.applications a
SET 
  snapshot_cgpa = sp.cgpa,
  snapshot_skills = sp.skills,
  snapshot_resume_url = sp.resume_url,
  snapshot_major = sp.major,
  snapshot_year = sp.year,
  snapshot_semester = sp.semester
FROM public.student_profiles sp
WHERE a.student_id = sp.id
  AND a.snapshot_cgpa IS NULL;

-- Index for performance when querying snapshot data
CREATE INDEX IF NOT EXISTS idx_applications_snapshot_cgpa ON public.applications(snapshot_cgpa);
