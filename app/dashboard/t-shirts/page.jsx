
import Image from "next/image";
import Link from "next/link";

const Tshirts = ({searchParams}) => {
    const colorVariants = ['black', 'white', 'blue'];
    const sizeVariants = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
    const imgUrl = {
        black: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=2048&q=75',
        blue: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-circles-blue.png%3Fv%3D1690003396&w=2048&q=75',
        white: 'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-2.png%3Fv%3D1689798965&w=2048&q=75'
    }

    const selectedColor = searchParams.color;
    const selectedSize = searchParams.size;

    return (
        <main className='background-soft p-5 rounded-lg mt-5'>
            <div className='flex items-center justify-center'>
                <div className='flex-[2] flex justify-center'>
                    <Image 
                        src={imgUrl[selectedColor]}
                        alt="Shirt variant"
                        width={600}
                        height={500}
                    />
                </div>
                <div className="flex-1">
                    <h1 className="text-3xl font-semibold">Acme Circles T-Shirt</h1>
                    <div>
                        <section className="mb-5">
                            <h2 className="text-md uppercase mb-2">Color</h2>
                            <div className="flex gap-2">
                                {
                                    colorVariants.map((color, index) => (
                                        <Link 
                                            href={`?color=${color}&size=${selectedSize}`}
                                            key={index} 
                                            className={`capitalize bg-gray-100 text-blue-700 px-4 py-1 rounded-full border-2 
                                            ${selectedColor === color ? 
                                                'border-[#ff00e1] bg-[#c0ffd1]' :
                                                'border-grey-200'
                                            }`}>
                                                {color}
                                        </Link>
                                    ))
                                }
                                
                            </div>
                            <div className="flex gap-2 mt-5">
                            {
                                    sizeVariants.map((size, index) => (
                                        <Link 
                                            href={`?color=${selectedColor}&size=${size}`}
                                            key={index} 
                                            className={`capitalize bg-gray-100 text-blue-700 px-4 py-1 rounded-full border-2 
                                            ${selectedSize === size ? 
                                                'border-[#ff00e1] bg-[#c0ffd1]' :
                                                'border-grey-200'
                                            }`}>
                                                {size}
                                        </Link>
                                    ))
                                }
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Tshirts