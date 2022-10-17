import AuthPage from "../pages/App/AuthPage"
export default function Hero({setUser}) {
    return (
        <>
            {/* hero - start */}
            <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">

                <section class="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
                {/* content - start */}
                <div class="xl:w-5/12 flex flex-col justify-center sm:text-center lg:text-left lg:py-12 xl:py-24">
                    <p class="text-indigo-500 md:text-lg xl:text-xl font-semibold mb-4 md:mb-6">Very proud to introduce</p>
            
                    <h1 class="text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">Sellers new way to Estimates</h1>
            
                    <p class="lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">This application helps to estimate the profitablity of a product to help you make better decision for your business</p>
            
                    <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                    <a href="#" class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Start now</a>
            
                    <a href="#" class="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Take tour</a>
                    </div>
                </div>
                {/* content - end */}
            
                {/* image - start */}
                <div class="xl:w-5/12 lg:h-auto overflow-hidden shadow-lg rounded-lg">
                <AuthPage setUser={setUser}/>
                </div>
                {/* image - end */}
                </section>
            </div>
            </div>
            {/* hero - end */}
        </>
    )

}