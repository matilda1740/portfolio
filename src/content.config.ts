import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		outcome: z.string(),
		year: z.number().int(),
		category: z.enum(['research', 'product', 'engineering', 'design', 'other']),
		tags: z.array(z.string()),
		published: z.boolean().default(false),
		featured: z.boolean().default(false),
		sortOrder: z.number().int().nonnegative().optional(),
		role: z.string().optional(),
		organization: z.string().optional(),
		thumbnail: z.string().optional(),
		thumbnailAlt: z.string().optional(),
		thumbnailWidth: z.number().int().positive().optional(),
		thumbnailHeight: z.number().int().positive().optional(),
		githubUrl: z.string().url().optional(),
		demoUrl: z.string().url().optional(),
		figmaUrl: z.string().url().optional(),
		paperUrl: z.string().url().optional(),
		externalUrl: z.string().url().optional(),
	}),
});

export const collections = { projects };
