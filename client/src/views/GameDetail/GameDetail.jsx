import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailFromState } from "../../redux/actions";
import gamesArray from "games/gamesIndex";

const GameDetail = () =>{
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getDetailFromState(id));
    }, [dispatch, id])

    const gameDetail = useSelector((state) => state.gameDetail);

    const game = gamesArray.filter((game) => game.id.toString() === id)

    return(
        <div>
            <div>
                {gameDetail[0].name}
            </div>

            <div>
                {game.length === 1 
                ? game[0].game
                : console.log(id)
                }
            </div>
        </div>

    )
}

export default GameDetail;