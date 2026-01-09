-- Insert LANYARD category
INSERT INTO public.categories (slug, name, description, image)
VALUES (
  'lanyard',
  'Lanyards',
  'Fall protection lanyards including rope, braided, webbing, elastic, work positioning, and tool lanyards',
  '/images/categories/lanyard.jpg'
)
ON CONFLICT (slug) DO NOTHING;
