import logo from '../assets/logo.webp';

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4 text-center">
            <img src={logo} alt="Logo" className="mx-auto rounded-lg mb-4 w-24 h-24" />
            <h1 className="text-2xl font-bold">shopping list</h1>
        </header>
    );
};

export default Header;
