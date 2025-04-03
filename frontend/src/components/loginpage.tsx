import logo from '../assets/logo.svg';
import WaveElement from '../assets/WaveElement.svg';
import usericon from '../assets/UserIcon.svg';
import passwordicon from '../assets/PasswordIcon.svg';
import polygon1 from '../assets/Polygon1.svg';
import polygon2 from '../assets/Polygon.svg';
import polygon3 from '../assets/Polygon 3.svg';

import {useNavigate} from 'react-router-dom';

export default function HomePage() {

    const navigate = useNavigate();
    const Registerplease = () => {
        navigate('/register');
    };

    return (
    <div className="bg-cover md:bg-[#03045E] bg-[#0077B6] min-h-screen w-[100vw] sm:flex">
        <div className="flex-1 flex flex-col items-center justify-center text-white relative ">
            <img src={logo} draggable="false" alt="Logo" className="mt-8 md:size-70 size-30 z-5" />
            <h1 className="font-extrabold sm:text-6xl text-3xl z-5">CalAI</h1>
            <p className="mt-4 font-normal text-2xl sm:text-4xl z-5 hidden md:block">Your AI Calendar Manager</p>
            <img src={polygon1} draggable="false" alt="Polygon" className="absolute top-0 left-0 justify-start size-90" />
            <img src={polygon2} draggable="false" alt="Polygon" className="absolute justify-start sm:size-150" />
            <img src={polygon3} draggable="false" alt="Polygon" className="absolute bottom-0 left-0 size-90" />
        </div>

        <div className="flex-1 justify-center bg-cover bg-[#CAF0F8] text-white">
        <div className="flex flex-col items-center justify-center text-center p-[2vh] bg-[#0077B6] shadow-lg">
            <h1 className="pt-[2.5vh] font-bold text-[50px]">Welcome</h1>
            <h2 className="mt-auto text-[27px]">Login to your account to continue</h2>
        </div>
        <div className="relative">
            <img src={WaveElement} draggable="false" className="w-[100vw] mt-[0px] drop-shadow-[0_20px_10px_rgba(0,0,0,0.35)] isolate" alt="Wave Element"/>
        </div>
        <div className="mb-100 sm:mb-0">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col items-center justify-center mt-[2vh]">
                <div className="relative">
                    <img src={usericon} draggable="false" alt="user" className="size-9 mt-[1.5vh] mx-[0.4vw] absolute" />
                    <input type="text" placeholder="Username" className="p-2 bg-[#90E0EF] w-100 h-15 text-2xl pr-[100px] pl-15 mb-4 rounded-[10px] text-black shadow-[7px_10px_5px_rgba(0,0,2,0.3)]" required />
                </div>
                
                <div className="relative mt-[3vh]">
                    <img src={passwordicon} draggable="false" alt="pass" className="size-9 mt-[1.5vh] mx-[0.4vw] absolute" />
                    <input type="password" placeholder="Password" className="p-2 bg-[#90E0EF] w-100 h-15 text-2xl pr-[100px] pl-15 mb-4 rounded-[10px] text-black shadow-[7px_10px_5px_rgba(0,0,2,0.3)]" required />
                </div>

                <div className="w-100">
                    <div><p className="flex justify-end underline text-black hover:text-blue-400 text-1xl hover:cursor-pointer" onClick={() => Registerplease()}>New Member?</p></div>
                </div>

                <button type="submit" className="bg-[#90E0EF] hover:cursor-pointer text-black tracking-[5px] sm:w-[15vw] sm:h-[8vh] sm:text-3xl text-2xl w-[40vw] font-semibold py-2 px-4 rounded-[100px] mt-[3vh] hover:bg-[#0077B6] hover:text-white transition duration-100 shadow-[7px_10px_5px_rgba(0,0,2,0.3)]">LOGIN</button>
            </form>
        </div>
      </div>
    </div>
  );
}
