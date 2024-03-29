import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import rentalImg from "../assets/rental.svg";
import driverImg from "../assets/driver.svg";

export function SignIn() {
  return (
    <main className="h-screen flex w-full">
      <div className="bg-primary-foreground w-full h-full flex items-center justify-center  p-16">
        <Carousel className="w-full max-w-xl">
          <CarouselContent>
            <CarouselItem>
              <div className="flex aspect-square bg-background rounded p-8">
                <img src={rentalImg} alt="Aluguel de Carro" />
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="flex aspect-square bg-background rounded items-center justify-center p-8">
                <img src={driverImg} alt="Motorista de Carro" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold tracking-tighter">
              Entre com sua conta
            </CardTitle>

            <CardDescription>
              Utilize seu e-mail e senha ou o GitHub para entrar.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="exemplo@email.com" type="email" />
            </div>

            <div className="mt-4">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                placeholder="sua senha secreta"
                type="password"
              />
            </div>

            <Button className="w-full mt-6">Entrar</Button>

            <div className="flex items-center gap-6 mt-4">
              <Separator />
              <span className="text-xs text-muted-foreground">Ou</span>
              <Separator />
            </div>

            <Button variant="outline" className="w-full mt-4">
              <GitHubLogoIcon className="mr-2" /> Entrar com o GitHub
            </Button>
          </CardContent>

          <CardFooter>
            <p className="text-muted-foreground text-center text-sm">
              Ao entrar em nossa plataforma você concorda com nossos{" "}
              <a href="#" className="underline">
                Termos de Uso
              </a>{" "}
              e{" "}
              <a href="#" className="underline">
                Política de Privacidade
              </a>
              .
            </p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
