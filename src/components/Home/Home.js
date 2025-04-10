import Card from "../Card/Card"
import CircularProgress from '@mui/material/CircularProgress';
import Loading from "../Loading/Loading";

const Home = () => {
    
    return (
        <div className="relative my-0 mx-auto flex w-4/5 flex-col items-center justify-center">
            {/* <h2 className="font-bold block text-[#cccccc] text-5xl font-digital mb-3">
                Welcome to the Home Page bro!
            </h2> */}

            <Card name={'imanol'} email={'imanolcondeimanol@gmail.com'} phone={'+34627188184'} />

        </div>
    )

}

export default Home