import { ReactComponent as BookIcon } from './BookIcon.svg'
function Book({ id, title, price, discount }: Book): JSX.Element {
    return (
        <>
            <div key={id} className=" w-full">
                <div className="image-cover">
                    <div
                        style={{ backgroundColor: '#EDEEF3' }}
                        className="w-full h-13rem m-auto text-center p-28"
                    >
                        <BookIcon />
                    </div>
                </div>

                <div className="product-desc pb-4 pt-2 px-4">
                    <h4 className="product-title font-nato uppercase text-base	font-normal	">
                        {title}
                    </h4>
                    <div className="pricing flex justify-between">
                        {discount && (
                            <span className="percentage text-red-600 text-lg font-medium">
                                {discount}
                            </span>
                        )}
                        {price && (
                            <span className="product-priec text-lg font-medium">
                                {price}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
type Book = {
    id: number
    title: string
    price: string
    image: string
    discount?: number | undefined
}

export default Book
