-- ============================================================================
-- STUDENT CALENDAR EVENTS POLICY
-- ============================================================================
-- This migration allows students to create INTERVIEW events on the calendar
-- Run this in your Supabase SQL Editor
-- ============================================================================

-- Allow students to create INTERVIEW events
DROP POLICY IF EXISTS "Students can create interview events" ON public.calendar_events;
CREATE POLICY "Students can create interview events"
  ON public.calendar_events FOR INSERT
  WITH CHECK (
    get_user_role(auth.uid()) = 'STUDENT' 
    AND event_type = 'INTERVIEW'
  );

-- Allow students to update their own interview events
DROP POLICY IF EXISTS "Students can update their own events" ON public.calendar_events;
CREATE POLICY "Students can update their own events"
  ON public.calendar_events FOR UPDATE
  USING (
    created_by = auth.uid() 
    AND get_user_role(auth.uid()) = 'STUDENT'
  );

-- Allow students to delete their own interview events
DROP POLICY IF EXISTS "Students can delete their own events" ON public.calendar_events;
CREATE POLICY "Students can delete their own events"
  ON public.calendar_events FOR DELETE
  USING (
    created_by = auth.uid() 
    AND get_user_role(auth.uid()) = 'STUDENT'
  );

-- ============================================================================
-- COMPLETION MESSAGE
-- ============================================================================
DO $$
BEGIN
  RAISE NOTICE '✅ Student calendar policy applied successfully!';
  RAISE NOTICE 'Students can now:';
  RAISE NOTICE '  • Create INTERVIEW events on the calendar';
  RAISE NOTICE '  • Update their own events';
  RAISE NOTICE '  • Delete their own events';
END $$;
