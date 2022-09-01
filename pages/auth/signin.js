import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

const signInLocal = ({ providers }) => {
  // console.log(providers);
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div className="flex flex-col items-center" key={provider.name}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png"
              alt="google-logo"
              className="w-52 object-cover"
            />
            <p className="text-sm italic my-10">
              This website is created for learning purposes
            </p>
            <button
              className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              Sigin with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default signInLocal;
