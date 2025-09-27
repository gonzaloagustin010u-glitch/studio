'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Wand2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { getAIDescription } from './actions';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object({
  projectName: z.string().min(3, { message: 'El nombre del producto debe tener al menos 3 caracteres.' }),
  category: z.string().min(1, { message: 'Por favor, selecciona una categoría.' }),
  projectFeatures: z.string().min(10, { message: 'Por favor, enumera algunas características clave.' }),
  targetAudience: z.string().min(3, { message: 'Describe tu público objetivo.' }),
  projectValue: z.string().min(10, { message: 'Describe el valor que aporta tu producto.' }),
  encoding: z.string().optional(),
  projectDescription: z.string().min(20, { message: 'La descripción debe tener al menos 20 caracteres.' }),
});

export function ListingForm() {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: '',
      category: 'Proyecto de Programación',
      projectFeatures: '',
      targetAudience: '',
      projectValue: '',
      encoding: 'UTF-8',
      projectDescription: '',
    },
  });

  const category = form.watch('category');

  const handleGenerateDescription = async () => {
    setIsGenerating(true);
    const { projectName, projectFeatures, targetAudience, projectValue } = form.getValues();
    const result = await getAIDescription({ projectName, projectFeatures, targetAudience, projectValue });

    if (result.error) {
      toast({
        title: 'Falló la Generación',
        description: result.error,
        variant: 'destructive',
      });
    } else if (result.description) {
      form.setValue('projectDescription', result.description, { shouldValidate: true });
      toast({
        title: '¡Descripción Generada!',
        description: 'La descripción generada por IA ha sido añadida a continuación.',
      });
    }
    setIsGenerating(false);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: '¡Publicación Enviada!',
      description: 'Tu producto ya está disponible en CodeCanvas. (Esto es una demostración)',
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Detalles del Producto</CardTitle>
            <CardDescription>
              Proporciona la información esencial sobre tu producto.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
             <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoría del Producto</FormLabel>
                   <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una categoría" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Proyecto de Programación">Proyecto de Programación</SelectItem>
                        <SelectItem value="Diseño Web">Diseño Web</SelectItem>
                      </SelectContent>
                    </Select>
                  <FormDescription>Elige si estás vendiendo un proyecto de código o un diseño web.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre del Producto</FormLabel>
                  <FormControl>
                    <Input placeholder={category === 'Diseño Web' ? 'ej., Plantilla para Portfolio Creativo' : 'ej., Quantum DB'} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             {category === 'Proyecto de Programación' && (
                <FormField
                  control={form.control}
                  name="encoding"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Juego de Caracteres / Codificación</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una codificación" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="UTF-8">UTF-8</SelectItem>
                          <SelectItem value="UTF-16">UTF-16</SelectItem>
                          <SelectItem value="ISO-8859-1">ISO-8859-1</SelectItem>
                          <SelectItem value="Windows-1252">Windows-1252</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>Asegura la correcta visualización para usuarios internacionales.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Descripción Potenciada por IA</CardTitle>
                <CardDescription>
                Proporciona algunos puntos clave sobre tu producto y nuestra IA escribirá una descripción profesional para ti.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <FormField
                    control={form.control}
                    name="projectFeatures"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Características Clave (una por línea)</FormLabel>
                        <FormControl>
                            <Textarea placeholder={category === 'Diseño Web' ? "- Diseño minimalista y moderno\n- Totalmente responsive\n- Optimizado para SEO" : "- Rendimiento ultrarrápido\n- Cumple con ACID\n- Escrito en Rust"} {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="targetAudience"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Público Objetivo</FormLabel>
                        <FormControl>
                            <Input placeholder={category === 'Diseño Web' ? 'ej., Fotógrafos, artistas, freelancers' : 'ej., Desarrolladores de aplicaciones financieras en tiempo real'} {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="projectValue"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Propuesta de Valor</FormLabel>
                        <FormControl>
                            <Textarea placeholder="¿Qué valor único aporta tu producto a los usuarios?" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-end">
                    <Button type="button" onClick={handleGenerateDescription} disabled={isGenerating}>
                        {isGenerating ? (
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                            <Wand2 className="mr-2 h-4 w-4" />
                        )}
                        Generar con IA
                    </Button>
                </div>

                <Separator />
                
                <FormField
                    control={form.control}
                    name="projectDescription"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Descripción Completa del Producto</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Tu descripción generada o escrita manualmente aparecerá aquí." {...field} rows={8} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
            </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Crear Publicación
          </Button>
        </div>
      </form>
    </Form>
  );
}
