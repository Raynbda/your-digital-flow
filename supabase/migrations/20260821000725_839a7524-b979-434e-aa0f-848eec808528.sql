CREATE TABLE public.diagnostic_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT,
  name TEXT,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  scores JSONB NOT NULL DEFAULT '{}'::jsonb,
  primary_diagnosis TEXT NOT NULL,
  secondary_diagnosis TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.diagnostic_submissions TO anon;
GRANT INSERT ON public.diagnostic_submissions TO authenticated;
GRANT ALL ON public.diagnostic_submissions TO service_role;

ALTER TABLE public.diagnostic_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a diagnostic"
ON public.diagnostic_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);