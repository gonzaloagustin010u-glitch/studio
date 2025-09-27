import { ListingForm } from './listing-form';

export default function SellPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
      <div className="space-y-4 mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary">Crea Tu Publicación</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Completa los detalles a continuación para poner a la venta tu proyecto de programación. Usa nuestras herramientas de IA para crear la descripción perfecta.
        </p>
      </div>
      <ListingForm />
    </div>
  );
}
