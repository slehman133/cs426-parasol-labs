import Image from "next/image";
import { useRef } from "react";

export default function Home() {

  return (
    <>
      <div className="invisible flex flex-row justify-between my-4 mx-10 text-md font-mono lg:visible">
        <div>
          <a href="#home">Home</a>
        </div>
        <div className="flex justify-evenly gap-10">
          <a href="#description">Project Description</a>
          <a href="#project-resources">Project Resources</a>
        </div>
      </div>
      <main className="flex min-h-screen flex-col mx-5 md:mx-36">
        <section id="home">
          <div className="flex flex-col items-center my-4 text-center">
            <h1 className="font-bold text-xl md:text-6xl m-2">Ecommerce Website for Parasol Laboratories</h1>
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
        <section id="project-resources max-w-3xl">
          <div className="my-4 text-lg">
            <h3 className="font-semibold text-4xl ">Project Related Resources:</h3>
            <h5 className="text-xl font-semibold my-2">Problem domain book:</h5>
            <div className="ml-10 ">
              <ul className="list-disc">
                <li className="text-ellipsis overflow-hidden">Riva, M. (2023) Real-World Next.js: Build scalable, high-performance, and modern web applications using Next.js, the React framework for production 1st Edition.  Packt Publishing.</li>
              </ul>
            </div>
            <h5 className="text-xl font-semibold my-2">Websites useful/related to the project:</h5>
            <div className="ml-10 ">
              <ul className="list-disc">
                <li><a href="https://nextjs.org/docs">Next.js: https://nextjs.org/docs</a></li>
                <li><a href="https://nextui.org/docs">NextUI: https://nextui.org/docs</a></li>
                <li className="text-ellipsis overflow-hidden"><a href="https://analytics.google.com/analytics/academy/course/6">Google Analytics: https://analytics.google.com/analytics/academy/course/6</a></li>
              </ul>
            </div>
            <h5 className="text-xl font-semibold my-2">Technical reports, conference papers, and/or journal articles:</h5>
            <div className="ml-10 ">
              <ul className="list-disc">
                <li className="text-ellipsis overflow-hidden">{`Capała, Łukasz, and Maria Skublewska-Paszkowska. "Comparison of AngularJS and React.js frameworks based on a web application." Journal of Computer Sciences Institute 6 (March 30, 2018): 82–86.https://ph.pollub.pl/index.php/jcsi/article/view/645.`}</li>
                <li className="text-ellipsis overflow-hidden">{`Patel, Vishal. “Analyzing the Impact of Next.JS on Site Performance and SEO”. (2023). International Journal of Computer Applications Technology and Research. https://doi.org/10.7753/ijcatr1210.1004.`}</li>
              </ul>
            </div>
            <h5 className="text-xl font-semibold my-2">News and other information pertaining to your project topic or components:</h5>
            <div className="ml-10 ">
              <ul className="list-disc">
                <li className="text-ellipsis overflow-hidden"><a href="https://docs.blender.org/manual/en/latest/">Blender: https://docs.blender.org/manual/en/latest/</a></li>
              </ul>
            </div>
          </div>
        </section>
      </main >
    </>
  );
}
