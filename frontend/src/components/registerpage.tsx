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
    const Login = () => {
        navigate('/login');
    };

    return (
    <div className="bg-cover md:bg-[#03045E] bg-[#0077B6] min-h-screen w-[100vw] flex flex-col md:flex-row overflow-x-hidden">
        <div className="flex-1 flex flex-col items-center justify-center text-white relative">
            <img src={logo} draggable="false" alt="Logo" className="mt-8 md:size-70 size-30 z-5 hover:cursor-pointer" onClick={() => navigate("/home")} />
            <h1 className="font-extrabold sm:text-6xl text-3xl z-5 hover:cursor-pointer" onClick={() => navigate("/home")}>CalAI</h1>
            <p className="mt-4 font-normal text-2xl sm:text-4xl z-5 hidden sm:block hover:cursor-pointer" onClick={() => navigate("/home")}>Your AI Calendar Manager</p>
            <img src={polygon1} draggable="false" alt="Polygon" className="absolute top-0 left-0 justify-start hidden md:block size-90" />
            <img src={polygon2} draggable="false" alt="Polygon" className="absolute justify-start hidden md:block sm:size-150" />
            <img src={polygon3} draggable="false" alt="Polygon" className="absolute bottom-0 left-0 hidden md:block size-90" />
        </div>

        <div className="flex-1 justify-center bg-cover bg-[#CAF0F8] text-white">
        <div className="flex flex-col items-center justify-center text-center md:p-[2vh] bg-[#0077B6] shadow-lg">
            <h1 className="pt-[2.5vh] font-bold md:text-[50px] text-[30px]">Create An Account</h1>
            <h2 className="mt-auto md:text-[27px] text-[20px]">New Member Register Here</h2>
        </div>
        <div className="relative">
            <img src={WaveElement} draggable="false" className="w-[100vw] mt-[0px] drop-shadow-[0_20px_10px_rgba(0,0,0,0.35)] isolate" alt="Wave Element"/>
        </div>
        <div>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col items-center justify-center mt-[2vh]">
                <div className="relative">
                    <img src={usericon} draggable="false" alt="user" className="size-9 mt-[1.5vh] mx-[0.4vw] absolute" />
                    <input type="text" placeholder="Username" className="p-2 bg-[#90E0EF] md:w-80 lg:w-100 w-100 h-15 text-2xl pr-[100px] pl-15 mb-4 rounded-[10px] text-black shadow-[7px_10px_5px_rgba(0,0,2,0.3)] focus:outline-none focus:border-none" required />
                </div>
                
                <div className="relative mt-[3vh]">
                    <img src={passwordicon} draggable="false" alt="pass" className="size-9 mt-[1.5vh] mx-[0.4vw] absolute" />
                    <input type="password" placeholder="Password" className="p-2 bg-[#90E0EF] md:w-80 lg:w-100 w-100 h-15 text-2xl pr-[100px] pl-15 mb-4  rounded-[10px] text-black shadow-[7px_10px_5px_rgba(0,0,2,0.3)] focus:outline-none focus:border-none" required />
                </div>

                <div className="relative mt-[3vh]">
                    <input type="password" placeholder="Confirm Password" className="p-2 bg-[#90E0EF] md:w-80 lg:w-100 w-100 h-15 text-2xl pr-[100px] pl-15 mb-4 rounded-[10px] text-black shadow-[7px_10px_5px_rgba(0,0,2,0.3)] focus:outline-none focus:border-none" required />
                </div>

                <div className="flex w-100 justify-end">
                <div><p className="flex  justify-end underline text-black hover:text-blue-400 text-1xl hover:cursor-pointer" onClick={() => Login()} >Aready a Member?</p></div>
                </div>

                <button type="submit" className="bg-[#90E0EF] hover:cursor-pointer text-black md:tracking-[5px] md:w-[15vw] w-[20vw] h-[8vh] text-2xl md:text-3xl font-semibold py-2 px-4 rounded-[100px] mt-[3vh] hover:bg-[#0077B6] hover:text-white transition duration-100 shadow-[7px_10px_5px_rgba(0,0,2,0.3)] md:mb-0 mb-10">LOGIN</button>
            </form>
        </div>
      </div>
    </div>
  );
}
