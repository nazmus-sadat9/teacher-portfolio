import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="bg-[#f8f6f0] text-[#22382c] font-sans">
      <section className="w-[min(1120px,calc(100%-3rem))] max-[700px]:w-[min(100%-2rem,1120px)] mx-auto py-20 pb-28 max-[700px]:py-12 min-h-[75vh]">
        
        <p className="text-[#1e593c] text-[0.75rem] font-bold tracking-[0.16em] uppercase">
          About Atik
        </p>

        <h1 className="font-serif tracking-[-0.055em] leading-[0.98] text-[clamp(3rem,7vw,6rem)] max-w-[850px] mt-4">
          Teaching English with patience, purpose, and joy.
        </h1>

        <div className="max-w-[650px] mt-8 text-[#5a7767] text-[1.1rem] leading-[1.8] space-y-4">
          <p>
            I am an English Teacher, Assistant Director of NSA_Joy, and Master
            Trainer in English. I currently work as an Assistant Teacher of
            English at Matrai High School, Kalai, Joypurhat.
          </p>

          <p>
            My goal is to make English useful and approachable for every learner.
            Whether you want to improve conversation, grammar, writing, or exam
            skills, lessons are shaped around your needs.
          </p>
        </div>

        <div className="grid grid-cols-3 max-[700px]:grid-cols-1 gap-4 mt-12">
          <div className="p-6 bg-[#f1ede0] rounded-2xl">
            
            <b>Work</b>

            <p className="text-[#5a7767] leading-[1.6] mt-3">
              Matrai High School, Kalai, Joypurhat
              <br />
              Assistant Teacher, English
              <br />
              2019 — Present
            </p>
          </div>
          <div className="p-6 bg-[#f1ede0] rounded-2xl">
            <b>Education</b>
            <p className="text-[#5a7767] leading-[1.6] mt-3">
              Life story
             <br />
              Class of 2009
            </p>
          </div>

          <div className="p-6 bg-[#f1ede0] rounded-2xl">
            <b>Location</b>
            <p className="text-[#5a7767] leading-[1.6] mt-3">
              Joypur, Rajshahi, Bangladesh
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
