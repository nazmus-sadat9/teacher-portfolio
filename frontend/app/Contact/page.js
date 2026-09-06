"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  // form states 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // error states
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [msgErr, setMsgErr] = useState("");

  // validation 
  function isFormValid() {
    
    let isValid = true;

    setNameErr("");
    setEmailErr("");
    setMsgErr("");

    if (!name.trim()) {
      setNameErr("Name can't be empty.");
      isValid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     
    if (!email.trim()) {
      setEmailErr("Email can't be empty.");

    } else if (!emailRegex.test(email)) {
      setEmailErr("Enter a valid email.");
      isValid = false;
    }

    if (!msg.trim()) {
      setMsgErr("Message can't be empty.");
      isValid = false;
    }

    return isValid;
  }

  async function submit(e) {

    e.preventDefault();

    if (!isFormValid()) return;

    try{

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          msg
        }),
      });

      if (response.ok) {
        alert("Message sent successfully.");
        setNameErr("");
        setEmailErr("");
        setMsgErr("");
      } else {
        alert("Failed to send message.");
      }

    } catch (err){
      alert("Server error.");
  }
}

  return (
    <main className="bg-[#f8f6f0] w-screen text-[#22382c] selection:bg-[#dad6c9]">

      <Navbar />

      <section className="w-full mx-auto py-20 pb-28 md:pt-[7.5%] max-[700px]:py-12 min-h-[75vh] md:h-screen">
        <p className="pl-[5%] text-[#1e593c] text-[0.75rem] font-bold uppercase">
          Get in touch
        </p>

        <h1 className="pl-[5%] text-[clamp(3rem,7vw,6rem)] max-w-[850px] mt-4">
          Let&apos;s talk
        </h1>

        <p className="pl-[5%] mt-6 max-w-[560px] text-[#5a7767] text-[1.1rem] leading-[1.8]">
          Send a message and I will get back to you as soon as possible.
        </p>

        <div className="w-full flex justify-center items-center">
          <form onSubmit={submit} className="w-[80%] md:w-[50%] mt-8 grid gap-5">
          
            <label className="grid gap-2 font-bold">
              Name
              <input
                name="name"
                placeholder="NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-[#dad6c9] rounded-xl bg-[#f1ede0] p-3.5 font-normal"
              />

              {nameErr && <span className="text-red-600 text-sm font-normal">{nameErr}</span>}
            </label>

            <label className="grid gap-2 font-bold">
              Email
              <input
                name="email"
                type="email"
                 placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-[#dad6c9] rounded-xl bg-[#f1ede0] p-3.5 font-normal"
              />
              {emailErr && <span className="text-red-600 text-sm font-normal">{emailErr}</span>}
            </label>

            <label className="grid gap-2 font-bold">
              Message
              <textarea
                name="message"
                rows={6}
                placeholder="MESSAGE"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="w-full border border-[#dad6c9] rounded-xl bg-[#f1ede0] p-3.5 font-normal resize-y"
              />
              {msgErr && <span className="text-red-600 text-sm font-normal">{msgErr}</span>}
            </label>

            <button
              className="inline-block justify-self-start mt-8 px-[1.35rem] py-[0.9rem] rounded-full bg-[#1e593c] text-[#f8faf6] font-bold cursor-pointer"
              type="submit">
              Send message
            </button>

          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
