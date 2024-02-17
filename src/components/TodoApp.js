import Header from './Header';
import Footer from './Footer';
import MainSection from './MainSection';

export default function TodoApp() {
    return (
        <section className="todoapp">
            <Header />    
            <MainSection />   
            <Footer />
        </section>
    )
}