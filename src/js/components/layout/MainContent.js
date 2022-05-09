import Menu from "./Menu"

const MainContent = ({ children }) => {
    return (
        <>
            <Menu />
            <main>{children}</main>
        </>
    );
};

export default MainContent;