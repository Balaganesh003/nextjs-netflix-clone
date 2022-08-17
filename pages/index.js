import { FaChevronRight } from "react-icons/fa";
import { TbChevronRight } from "react-icons/tb";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import Head from 'next/head';


export default function Home() {
  const { data: session } = useSession()
  return (
    <div
      className="flex flex-col bg-opacity-10 items-center justify-center min-h-screen bg-black"
      style={{
        'background-image':
          'linear-gradient(rgb(0 0 0 / 65%), rgb(0 0 0 / 60%)), url(../background-img.jpg)',
      }}
    >
      <Head>
        <title>Netflix clone</title>
        <link rel='icon' href='../netflix-favicon.png' />
      </ Head>


      <div className="w-screen flex justify-between px-12 ">
        <div className='w-40'>
          <img src="../netflix-main-logo.png" alt="..." />
        </div>
        <div className="flex my-7 space-x-12 mr-10 ">
          {!session ? (
            <button className="bg-primary-red hover:bg-primary-red-hover  px-5 py-1 rounded   text-white" onClick={() => signIn('google')} >
              Sign In
            </button>
          ) : (
            <button className="bg-primary-red hover:bg-primary-red-hover  px-5 py-1 rounded   text-white" onClick={() => signOut()} >
              Sign Out
            </button>
          )}
        </div>
      </div>
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">

        {!session ? (
          <>
            <h1 className=" text-5xl font-medium text-white max-w-lg tracking-wide">Unlimited movies, TV shows and more.</h1>
            <h2 className='text-2xl font-normal text-white mt-4 mb-8'>Watch anywhere. Cancel anytime
            </h2>
            <p className='text-white'>Ready to watch? Enter your email to create or restart your membership</p>
            <div className="flex mt-5">
              <input class="shadow appearance-none  w-96  px-2 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email address"></input>
              <button className="bg-primary-red hover:bg-primary-red-hover flex items-center justify-center shadow-md  px-4 py-2 text-2xl text-white" onClick={() => signIn('google')} >
                Get Started
                <TbChevronRight className="ml-1 mt-1" />
              </button>
            </div>
          </>
        ) : (
          <h1 className=" text-5xl font-medium text-white max-w-lg tracking-wide">Welcome back <p className="mt-5 text-3xl">{session.user.name}</p></h1>

        )}





      </main >
    </div>


  );
};


