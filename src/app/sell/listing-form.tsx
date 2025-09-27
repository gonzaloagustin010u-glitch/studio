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
  projectName: z.string().min(3, { message: 'Project name must be at least 3 characters.' }),
  projectFeatures: z.string().min(10, { message: 'Please list some key features.' }),
  targetAudience: z.string().min(3, { message: 'Describe your target audience.' }),
  projectValue: z.string().min(10, { message: 'Describe the value your project provides.' }),
  price: z.coerce.number().positive({ message: 'Price must be a positive number.' }),
  encoding: z.string().min(1, { message: 'Please select a character encoding.' }),
  projectDescription: z.string().min(20, { message: 'Description must be at least 20 characters.' }),
});

export function ListingForm() {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: '',
      projectFeatures: '',
      targetAudience: '',
      projectValue: '',
      price: 0,
      encoding: 'UTF-8',
      projectDescription: '',
    },
  });

  const handleGenerateDescription = async () => {
    setIsGenerating(true);
    const { projectName, projectFeatures, targetAudience, projectValue } = form.getValues();
    const result = await getAIDescription({ projectName, projectFeatures, targetAudience, projectValue });

    if (result.error) {
      toast({
        title: 'Generation Failed',
        description: result.error,
        variant: 'destructive',
      });
    } else if (result.description) {
      form.setValue('projectDescription', result.description, { shouldValidate: true });
      toast({
        title: 'Description Generated!',
        description: 'The AI-powered description has been added below.',
      });
    }
    setIsGenerating(false);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Listing Submitted!',
      description: 'Your project is now live on CodeCanvas. (This is a demo)',
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>
              Provide the essential information about your project.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Quantum DB" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 99.99" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="encoding"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Character Set / Encoding</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an encoding" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="UTF-8">UTF-8</SelectItem>
                        <SelectItem value="UTF-16">UTF-16</SelectItem>
                        <SelectItem value="ISO-8859-1">ISO-8859-1</SelectItem>
                        <SelectItem value="Windows-1252">Windows-1252</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Ensures correct display for international users.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>AI-Powered Description</CardTitle>
                <CardDescription>
                Provide some key points about your project, and our AI will write a professional description for you.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <FormField
                    control={form.control}
                    name="projectFeatures"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Key Features (one per line)</FormLabel>
                        <FormControl>
                            <Textarea placeholder="- Blazing fast performance&#10;- ACID compliant&#10;- Written in Rust" {...field} rows={4} />
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
                        <FormLabel>Target Audience</FormLabel>
                        <FormControl>
                            <Input placeholder="e.g., Developers of real-time financial applications" {...field} />
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
                        <FormLabel>Value Proposition</FormLabel>
                        <FormControl>
                            <Textarea placeholder="What unique value does your project provide to users?" {...field} />
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
                        Generate with AI
                    </Button>
                </div>

                <Separator />
                
                <FormField
                    control={form.control}
                    name="projectDescription"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Full Project Description</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Your generated or manually written description will appear here." {...field} rows={8} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
            </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Create Listing
          </Button>
        </div>
      </form>
    </Form>
  );
}
