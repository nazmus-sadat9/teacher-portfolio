import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f8f6f0] text-[#22382c] font-sans">
      
      <Navbar />

      <section className="w-[min(1120px,calc(100%-3rem))] max-[700px]:w-[min(100%-2rem,1120px)] mx-auto grid grid-cols-2 max-[700px]:grid-cols-1 gap-20 max-[700px]:gap-8 items-center py-20 max-[700px]:py-12 pb-24 max-[700px]:pb-16">
        <div>
          <p className="text-[#1e593c] text-[0.75rem] font-bold tracking-[0.16em] uppercase">
            English teacher · Master trainer
          </p>

          <h1 className="homeHeader">
            Learn English with confidence and <em>clarity.</em>
          </h1>

          <p className="mt-6 max-w-[560px] text-[#5a7767] text-[1.1rem] leading-[1.8]">
            I am Atik Hasan, an English Teacher, Assistant Director of NSA Joypurhat,
            and Master Trainer in English. I help learners find the right words
            for school, work, and everyday life.
          </p>

          <Link
            href="/Contact"
            className="inline-block mt-8 px-[1.35rem] py-[0.9rem] rounded-full bg-[#1e593c] text-[#f8faf6] font-bold">
            Contact me
          </Link>

          <p className="mt-8 text-[#5a7767] text-[0.85rem]">
            Based in Joypurhat, Rajshahi, Bangladesh
          </p>
        </div>

        <div
          className="aspect-[4/5] flex items-center justify-center border border-[#1e593c] rounded-[2rem] bg-[#f1ede0] text-[#1e593c]">
          <div className="w-[50%] aspect-[1/1] rounded-full bg-[#fff] flex items-center justify-center">
            <span className="text-[2rem]">photo</span>
          </div>
        </div>
      </section>

      <section className="bg-[#1e593c] text-[#f8faf6] py-12">
        <div className="w-[min(1120px,calc(100%-3rem))] max-[700px]:w-[min(100%-2rem,1120px)] mx-auto">
          <p className="max-w-[760px] font-serif italic text-[2rem] max-[700px]:text-[1.5rem] leading-[1.3]">
            “English is not only a subject. It is a connection to people, ideas,
            and opportunity.”
          </p>
        </div>
      </section>

      <section className="w-[min(1120px,calc(100%-3rem))] max-[700px]:w-[min(100%-2rem,1120px)] mx-auto py-24">
        <p className="text-[#1e593c] text-[0.75rem] font-bold tracking-[0.16em] uppercase">
          What I teach
        </p>
        <div className="grid grid-cols-2 max-[700px]:grid-cols-1 gap-12 mt-4">
          <h2 className="font-serif tracking-[-0.055em] leading-[0.98] text-[clamp(2.5rem,5vw,4.5rem)]">
            Practical English for real life.
          </h2>
          <p className="text-[#5a7767] leading-[1.8]">
            From classroom foundations to confident conversation, my lessons
            are friendly, focused, and designed around your goals.
          </p>
        </div>

        <div className="grid grid-cols-3 max-[700px]:grid-cols-1 gap-4 mt-12">
          <article className="cards p-6 bg-[#f1ede0] rounded-2xl">
            <b>Conversation</b>
            <p className="text-[#5a7767] leading-[1.6] mt-3">
              Speak naturally in everyday and professional situations.
            </p>
          </article>

          <article className="cards p-6 bg-[#f1ede0] rounded-2xl">
            <b>Grammar & writing</b>
            <p className="text-[#5a7767] leading-[1.6] mt-3">
              Build strong foundations and express your ideas clearly.
            </p>
          </article>

          <article className="cards p-6 bg-[#f1ede0] rounded-2xl">
            <b>Training</b>
            <p className="text-[#5a7767] leading-[1.6] mt-3">
              Learn with an experienced teacher and master trainer.
            </p>
          </article>

        </div>
      </section>

      <Footer />
    </main>
  )
}
