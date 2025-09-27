'use server';

import { 
  generateProjectDescription, 
  type GenerateProjectDescriptionInput 
} from '@/ai/flows/generate-project-description';

export async function getAIDescription(
  input: GenerateProjectDescriptionInput
): Promise<{ description?: string; error?: string }> {
  try {
    if (!input.projectName || !input.projectFeatures || !input.targetAudience || !input.projectValue) {
        return { error: "Please fill all AI input fields to generate a description." };
    }

    const result = await generateProjectDescription(input);
    return { description: result.projectDescription };
  } catch (error) {
    console.error("AI description generation failed:", error);
    return { error: "Sorry, we couldn't generate a description at this time." };
  }
}
