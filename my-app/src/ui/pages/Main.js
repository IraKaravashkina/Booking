import React, {Component} from 'react';
import Header from "../components/Header/Header";
import {containers} from "../containers/App/app.modules.scss";
import Search from "../components/Search/Search";
import Filter from "../components/Filter/Filter";
import Hotel from "../components/Hotel/Hotel";
import Footer from "../components/Footer/Footer";

class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <div className={containers}>
                    <Search />
                    <Footer />
                </div>
            </>
        );
    }
}

export default Main;