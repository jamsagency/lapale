import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Instagram, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Palestra Nacional de Andinismo - Argentina",
  description: "Palestra Nacional de Andinismo en Nuñez, CABA, Argentina",
}

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <Script src="https://f.convertkit.com/ckjs/ck.5.js" />

      <div className="fixed top-0 left-0 right-0 w-full bg-black text-white py-2 z-50">
        <div className="container text-center text-sm">Desde 1982, única en el mundo</div>
      </div>
      <header className="sticky top-8 z-40 bg-white border-b border-zinc-200">
        <div className="container flex h-16 items-center justify-center px-4 md:px-6">
          <Link href="#" className="text-xl font-bold tracking-tight">
            Palestra Nacional de Andinismo
          </Link>
        </div>
      </header>
      <main className="flex-1 mt-8">
        <section className="relative w-full min-h-[90vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pale-hero.jpg-mYsRFDEZq3XFcqzwyakag3OJ6D76uG.jpeg")',
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <div className="space-y-8 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Sumate al newsletter de la palestra</h2>
              <div className="mx-auto w-full max-w-md newsletter-container">
                <form
                  action="https://app.kit.com/forms/7772257/subscriptions"
                  className="seva-form formkit-form"
                  method="post"
                  data-sv-form="7772257"
                  data-uid="02004e4ee4"
                  data-format="inline"
                  data-version="5"
                >
                  <div data-style="clean">
                    <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                    <div
                      data-element="fields"
                      data-stacked="false"
                      className="seva-fields formkit-fields flex flex-col sm:flex-row gap-3"
                    >
                      <div className="formkit-field flex-1">
                        <input
                          className="formkit-input w-full h-12 bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-full px-4"
                          name="email_address"
                          aria-label="Email Address"
                          placeholder="Ingresa tu email"
                          required
                          type="email"
                        />
                      </div>
                      <button
                        data-element="submit"
                        className="formkit-submit h-12 px-8 bg-white text-black hover:bg-white/90 rounded-full font-medium"
                      >
                        <div className="formkit-spinner">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <span>Suscribirse</span>
                      </button>
                    </div>
                    <div className="formkit-powered-by-convertkit-container hidden">
                      <a
                        href="https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"
                        data-element="powered-by"
                        className="formkit-powered-by-convertkit"
                        data-variant="dark"
                        target="_blank"
                        rel="noreferrer nofollow"
                      >
                        Built with Kit
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-16 max-w-5xl mx-auto">
              <div className="space-y-6 text-center">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                  Ubicada en el corazón de Nuñez, CABA
                </h2>
                <div className="flex items-center justify-center gap-2 text-zinc-600">
                  <MapPin className="h-5 w-5" />
                  <span>Miguel B. Sánchez 1050, Ciudad Autónoma de Buenos Aires, Argentina</span>
                </div>
                <a
                  href="https://www.instagram.com/escaladoresdelapale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center bg-black text-white px-8 text-sm font-medium hover:bg-zinc-800 transition-colors rounded-full"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  <span>Seguinos en Instagram</span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lugones-vertical.jpg-sh5FHWUBYAEpYMpTornRdETm1O9HtU.jpeg"
                    width={600}
                    height={800}
                    alt="Vista de la pared de escalada con múltiples escaladores"
                    className="w-full object-cover aspect-[4/5]"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/y-vertical.jpg-BUIVDi0pNDP7glq9jwlId6WqE27zot.jpeg"
                    width={600}
                    height={800}
                    alt="Vista en ángulo de la pared de escalada en forma de Y"
                    className="w-full object-cover aspect-[4/5]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-black text-white py-8">
        <div className="container flex justify-center px-4 md:px-6">
          <p className="text-center text-sm opacity-80">
            &copy; {new Date().getFullYear()} Creado por escaladores de la Palestra Nacional de Andinismo y del Centro
            Andino de Buenos Aires
          </p>
        </div>
      </footer>
    </div>
  )
}

