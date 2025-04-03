import logo from '../assets/logo.svg';
import WaveElement from '../assets/WaveElement.svg';
import usericon from '../assets/UserIcon.svg';
import passwordicon from '../assets/PasswordIcon.svg';

export default function HomePage() {
  return (
    <div className="bg-cover bg-[#03045E] min-h-screen w-[100vw] flex">
      <div className="flex-1 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold">Welcome to the Calendar App</h1>
        <p className="mt-4">This is a simple calendar application.</p>
        <img src={logo} draggable="false" alt="Logo" className="mt-8 w-[273.16px] h-[348px]" />
      </div>

      <div className="flex-1 justify-center bg-cover bg-[#CAF0F8] text-white">
        <div className="flex flex-col items-center justify-center text-center p-[2vh] bg-[#0077B6] shadow-lg">
            <h1 className="pt-[2.5vh] font-bold text-[50px]">Welcome</h1>
            <h2 className="mt-auto text-[27px]">Login to your account to continue</h2>
        </div>
        <div className="relative">
            <img src={WaveElement} draggable="false" className="w-[100vw] mt-[0px] drop-shadow-[0_20px_10px_rgba(0,0,0,0.35)] isolate" alt="Wave Element"/>
        </div>
        <div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col items-center justify-center mt-[2vh]">
                <div className="relative">
                    <img src={usericon} draggable="false" alt="user" className="size-9 mt-[1.5vh] mx-[0.4vw] absolute" />
                    <input type="text" placeholder="Username" className="p-2 bg-[#90E0EF] w-100 h-15 text-2xl pr-[100px] pl-[3vw] mb-4 border-2 border-black rounded-[10px] text-black shadow-[7px_10px_5px_rgba(0,0,2,0.3)]" required />
                </div>
                
                <div className="relative mt-[3vh]">
                    <img src={passwordicon} draggable="false" alt="pass" className="size-9 mt-[1.5vh] mx-[0.4vw] absolute" />
                    <input type="password" placeholder="Password" className="p-2 bg-[#90E0EF] w-100 h-15 text-2xl pr-[100px] pl-[3vw] mb-4 border-2 border-black rounded-[10px] text-black shadow-[7px_10px_5px_rgba(0,0,2,0.3)]" required />
                </div>

                <div className="flex w-100 justify-end">
                <p className="underline text-black text-2xl">New Member?</p>
                </div>

                <button type="submit" className="bg-[#90E0EF] text-black tracking-[5px] w-[15vw] h-[8vh] text-3xl font-semibold py-2 px-4 rounded-[100px] mt-[3vh] hover:bg-[#0077B6] hover:text-white transition duration-100 shadow-[7px_10px_5px_rgba(0,0,2,0.3)]">LOGIN</button>
            </form>
        </div>
      </div>
    </div>
  );
}
