import { Button } from '../Button/Button';
import { useCount } from '../../hooks';

export const Count = ({initial = 0, stock }) => {
    const { count, increment, decrement, reset} = useCount (initial);
    
    return (
        <>
        <div>
            { count < stock ? <Button classname=" w-5 " text="+" functionClick={increment} /> : <Button classname=" w-5 " text="+" />}
            <strong> {count} </strong>
            <Button text="-" functionClick={decrement}/>
            <Button text="reset" functionClick={reset}/>
        </div>
        </>
    )
}
