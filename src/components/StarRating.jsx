import {useState} from "react";

export default function StarRating({maxRating = 10, defaultRating = 0, onSetRating}) {
    const [rating, setRating] = useState(defaultRating);

    function handleRatingChange(e) {
        const value = Number(e.target.value);

        setRating(value);

        onSetRating?.(value)
    }

    return (
        <div className="rating">
            {Array.from({length: maxRating}, (_, i) => {
                const k = i + 1;

                return (<input
                        checked={rating === k}
                        value={k}
                        onChange={handleRatingChange}
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400" aria-label={`${k} star`}
                        key={k}
                    />
                )
            })}
        </div>
    );
}