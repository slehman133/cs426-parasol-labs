import Image from "next/image";
import { useRef } from "react";

export default function Home() {

  return (
    <>
      <div className="flex flex-row justify-between my-4 mx-10 text-xl font-mono">
        <div>
          <a href="#home">Home</a>
        </div>
        <div className="flex justify-evenly gap-10">
          <a href="#description">About</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
        </div>
      </div>
      <main className="flex min-h-screen flex-col items-center mx-52">
        <section id="home">
          <div className="flex flex-col items-center my-4">
            <h1 className="font-bold text-6xl">Ecommerce Website for Parasol Laboratories</h1>
            <div className="my-5">
              <Image src={"/logo.png"} alt="Parasol Labs logo" height={200} width={200} />
            </div>
            <p>A project for CS426 - Senior Projects, at the University of Nevada, Reno</p>
            <p>Team 21: Kaeden Carver, Nicholas Whitehorn, Samuel Lehman</p>
            <p>Instructor(s): Dave Feil Seifer, Sara Davis, Devrin Lee, Vinh Le</p>
            <p>External Advisor(s): Erin Keith: UNR CSE Instructor, Ahmed Munoz: CEO of Parasol Labs</p>
          </div>
        </section>
        <section id="description">
          <div className="my-4">
            <h3 className="font-semibold text-4xl">Project Description</h3>
            <p className="py-2">
              Team 21`s main goal with the ecommerce website for Parasol Laboratories Inc.is to build a platform
              with a sleek front-end design that will help promote Parasol Labs and inform potential customers and
              investors about services and products they offer to provide. To accomplish this goal, Team 21 has chosen
              to go with the tech stack of Next.js, TypeScript, Tailwind CSS, Prima, and PostgreSQL because these technologies
              are widely praised for their performance, ease of use, and reliability. The main functionalities of the web
              application are to be able to create and edit blog or news posts to the news section of the website, the ability
              to sell products and services that Parasol Labs is offering, tracking website analytics, and providing a nice user
              experience. To achieve these goals we will be using Sanity to manage all functionalities regarding news, Shopify to
              provide a place to store product information as well as handling the payment processing in a secure manner, Google
              Analytics to track information regarding user`s visiting the website, and a combination of custom CSS, CSS libraries
              such as Tailwind CSS,  a front-end component library such as React to provide a single page application experience
              as well as front-end component libraries such as NextUI and DaisyUI.
            </p>
            <p className="py-2">
              To provide Parasol Labs with a website that is reliable, the team is using Vercel to host the website as they boast
              a 99.99% uptime on their services. In terms of security, we will be using a library called NextAuth to handle user
              authentication as well as managing sessions. We also implemented functionality to salt and hash passwords in our
              database so if it is compromised no user`s passwords will be discovered. In regards to safety, team 21 has made
              sure to not develop any features or functionalities that would be detrimental or cause harm on to individuals or
              the public.
            </p>
          </div>
        </section>
      </main >
    </>
  );
}
