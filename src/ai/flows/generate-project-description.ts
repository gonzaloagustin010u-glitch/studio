'use server';

/**
 * @fileOverview Generates a professional project description using AI.
 *
 * - generateProjectDescription - A function that generates the project description.
 * - GenerateProjectDescriptionInput - The input type for the generateProjectDescription function.
 * - GenerateProjectDescriptionOutput - The return type for the generateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the programming project.'),
  projectFeatures: z.string().describe('A list of features included in the project.'),
  targetAudience: z.string().describe('The target audience for the project.'),
  projectValue: z.string().describe('The value that the project provides to its users.'),
});

export type GenerateProjectDescriptionInput = z.infer<
  typeof GenerateProjectDescriptionInputSchema
>;

const GenerateProjectDescriptionOutputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A professional and compelling description of the project.'),
});

export type GenerateProjectDescriptionOutput = z.infer<
  typeof GenerateProjectDescriptionOutputSchema
>;

export async function generateProjectDescription(
  input: GenerateProjectDescriptionInput
): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are an expert copywriter specializing in creating professional project descriptions for programming projects.  Use the project name, features, target audience, and value to create a description that will attract buyers and effectively showcase the project's value.

Project Name: {{{projectName}}}
Project Features: {{{projectFeatures}}}
Target Audience: {{{targetAudience}}}
Project Value: {{{projectValue}}}

Write a compelling project description:
`,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
