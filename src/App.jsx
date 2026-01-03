import './App.css'
import Header from './components/header/header.jsx';
import Hero from "./components/hero/hero.jsx";
import About from "./components/about/about.jsx";
import Projects from "./components/projects/projects.jsx";
import Services from "./components/services/services.jsx";
import Contact from "./components/contacts/contacts.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
    return (
        /* The div ensures the flexbox layout works correctly */
        <div
            className="
            flex flex-col
            w-screen
            relative
            left-[50%]
            ml-[-50vw]
            bg-linear-to-br
            from-[#ffefe0]
            via-[#ffe0e0]
            via-[#fff0d9]
            to-[#ffe8c7]
            bg-[length:400%_400%]
            animate-gradient-move
            overflow-x-hidden
          "
        >


        <Header />

            <main className="flex-grow">
                <Hero />
                <About />
                <Projects />
                <Services />
                <Contact />
            </main>

            {/* Footer is now a direct child of the root, at the very bottom */}
            <Footer/>
        </div>
    );
}

export default App;