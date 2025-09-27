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
        return { error: "Por favor, completa todos los campos de entrada de la IA para generar una descripción." };
    }

    const result = await generateProjectDescription(input);
    return { description: result.projectDescription };
  } catch (error) {
    console.error("La generación de la descripción por IA falló:", error);
    return { error: "Lo sentimos, no pudimos generar una descripción en este momento." };
  }
}
