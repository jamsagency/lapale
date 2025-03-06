import Link from "next/link"
import Image from "next/image"
import { Instagram, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <header className="container flex h-16 items-center justify-center px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Palestra Nacional de Andinismo Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-lg font-bold">Palestra Nacional de Andinismo</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <div className="space-y-8 mb-8">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Próximamente</h1>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Montañismo"
                className="aspect-video overflow-hidden rounded-xl object-cover max-w-xl w-full"
              />
            </div>
          </div>
        </section>

        <section id="subscribe" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Sumate al newsletter oficial de la palestra
              </h2>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2 sm:flex-row">
                <Input type="email" placeholder="Ingresa tu email" className="max-w-lg flex-1" />
                <Button type="submit">Suscribirse</Button>
              </form>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center justify-center gap-10">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ubicada en el corazón de Nuñez, CABA
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Miguel B. Sánchez 1050, Ciudad Autónoma de Buenos Aires, Argentina</span>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/escaladoresdelapale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  <span>Seguinos en Instagram</span>
                </a>
              </div>
              <div className="flex flex-col items-center space-y-4 max-w-2xl w-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Mapa de ubicación"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex justify-center px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Creado por escaladores de la Palestra Nacional de Andinismo
          </p>
        </div>
      </footer>
    </div>
  )
}

