import { ListingForm } from './listing-form';

export default function SellPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
      <div className="space-y-4 mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">Create Your Listing</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Fill out the details below to put your programming project up for sale. Use our AI tools to craft the perfect description.
        </p>
      </div>
      <ListingForm />
    </div>
  );
}
