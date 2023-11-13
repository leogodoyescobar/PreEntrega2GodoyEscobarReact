import { Button } from '../Button/Button';
import { useCount } from '../../hooks';

export const Count = ({initial = 0, max }) => {
    const { count, increment, decrement, reset} = useCount (initial);

    return (
        <>
        <div>
            <Button classname=" w-5 " text="+" functionClick={increment}/>
            <strong> {count} </strong>
            <Button text="-" functionClick={decrement}/>
            <Button text="reset" functionClick={reset}/>
        </div>
        </>
    )
}
