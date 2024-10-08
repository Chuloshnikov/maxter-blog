import Preloader from "@/components/ui/Preloader";


export default function Loading() {
  return (
    <section className="flex items-center justify-center min-w-screen min-h-[calc(100vh-21.1rem)]">
        <Preloader/>
    </section>
  )
}