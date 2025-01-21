import { z } from 'zod';

export const EducationSchema = z.object({
  institution: z.string(),
  area: z.string().optional(),
  studyType: z.string(),

  startDate: z.string(),
  endDate: z.string().optional(),

  gpa: z.string(),
  awards: z.array(z.string()),
});

export const JobProjectSchema = z.object({
  name: z.string(),
  description: z.string(),
  website: z.string().optional(),
  image: z.string(),
});

export const JobSchema = z.object({
  company: z.string(),
  position: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  highlights: z.array(z.string()),
  projects: z.array(JobProjectSchema).optional(),
});

export const ResumeSchema = z.object({
  basics: z.object({
    name: z.string(),
    label: z.string(),
    picture: z.string().optional(),
    email: z.string(),
    website: z.string(),
    location: z.object({
      city: z.string(),
      countryCode: z.string(),
      region: z.string(),
    }),
    profiles: z.array(
      z.object({
        network: z.string(),
        username: z.string(),
        url: z.string(),
      }),
    ),
  }),
  work: z.array(JobSchema),
  education: z.array(EducationSchema),
  publications: z.array(
    z.object({
      name: z.string(),
      publisher: z.string(),
      releaseDate: z.string(),
      website: z.string().optional(),
      summary: z.string(),
    }),
  ),
});

export type EducationType = z.infer<typeof EducationSchema>;
export type JobProjectType = z.infer<typeof JobProjectSchema>;
export type JobType = z.infer<typeof JobSchema>;
export type ResumeType = z.infer<typeof ResumeSchema>;
