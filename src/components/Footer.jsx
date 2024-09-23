import { Link } from 'react-router-dom'
import lemon_icon from '../assets/lemon_icon.png'



function Footer({ className }) {
  return (
    <footer className={`mt-20 w-full bg-primaryBlack pt-6 md:pt-12 absolute bottom-0 ${className}`}>
      <section className='md:max-w-[1080px] mx-auto flex flex-col items-center text-left px-4'>


        <div className='flex flex-col gap-2 md:gap-0 md:flex-row justify-between w-full'>

          {/* logo */}
          <div className='text-primaryWhite relative hidden md:block'>

            {/* <h3 className=' text-4xl text-left w-full absolute -top-8'>Little</h3> */}
            <img src={lemon_icon} alt="little lemon" className='w-32 saturate-0' />
            {/* <h3 className=' text-4xl w-full absolute -bottom-8'>Lemon</h3> */}

          </div>

          {/* navigation */}
          <div>

            <h3 className='font-bold text-primaryWhite uppercase mb-3 md:text-left text-center'>navigation</h3>
            <ul className='flex md:flex-col w-full text-sm justify-center gap-3 text-left text-primaryWhite capitalize mb-4'>
              <li className='opacity-70  hover:opacity-100 hover:text-secondary'><Link to='/'>home</Link></li>
              <li className='opacity-70  hover:opacity-100 hover:text-secondary'><Link to='/menu'>menu</Link></li>
              <li className='opacity-70  hover:opacity-100 hover:text-secondary'><Link to='/reservation'>reservation</Link></li>
              <li className='opacity-70  hover:opacity-100 hover:text-secondary'><Link to='order'>order online</Link></li>
            </ul>
          </div>

          {/* contact */}
          <div>

            <h3 className='font-bold text-primaryWhite uppercase mb-3 md:text-left text-center'>contact</h3>
            <ul className='flex md:flex-col justify-center text-sm gap-3 text-left text-primaryWhite mb-4'>
              <li><a href="#" target='_blank' className='hover:text-secondary opacity-70 hover:opacity-100'>address</a></li>
              <li><a href="#" target='_blank' className='hover:text-secondary opacity-70 hover:opacity-100'>phone</a></li>
              <li><a href="#" target='_blank' className='hover:text-secondary opacity-70 hover:opacity-100'>email</a></li>
            </ul>

          </div>

          {/* subscribe & social media */}
          <div className='flex flex-col gap-10 items-center justify-between'>

            <div>

              <h3 className='font-bold text-primaryWhite  uppercase mb-3 text-left'>join our newsletter</h3>

              {/* email input */}
              <div className='flex gap-3'>
                <input type="email" placeholder='your email' className='h-8 md:w-60 p-4 rounded-2xl text-sm outline-none border-none placeholder:text-accent placeholder:opacity-70 text-accent ' />
                <button className='h-8 px-4 rounded-2xl text-sm outline-none border-none bg-secondary text-accent font-semibold hover:bg-accent hover:text-secondary'>submit</button>
              </div>
            </div>

            {/* social */}
            <div className='flex justify-between w-4/5 md:w-full'>

              {/* facebook */}
              <a href="#" target='_blank'>
                <svg className='w-7 md:w-9 group' viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className='group-hover:fill-secondary' d="M10.5001 0C4.7011 0 0 4.72075 0 10.544C0 15.7667 3.78548 20.092 8.74886 20.9296V12.7437H6.21594V9.79796H8.74886V7.62588C8.74886 5.10564 10.2817 3.73225 12.5209 3.73225C13.5934 3.73225 14.515 3.8125 14.7826 3.84784V6.48217L13.2295 6.48292C12.012 6.48292 11.7773 7.06377 11.7773 7.91643V9.79645H14.6824L14.3035 12.7422H11.7773V21C16.9724 20.3651 21 15.9296 21 10.5409C21 4.72075 16.2989 0 10.5001 0Z" fill="white" />
                </svg>
              </a>

              {/* instagram */}
              <a href="#" target='_blank'>
                <svg className='w-7 md:w-9 group' viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className='group-hover:fill-secondary' d="M20.9466 6.17408C20.8974 5.05826 20.7169 4.29115 20.4584 3.62644C20.1917 2.92086 19.7814 2.28916 19.2438 1.76402C18.7186 1.23071 18.0826 0.816309 17.3851 0.553821C16.7164 0.295339 15.9531 0.114899 14.8371 0.0657021C13.7127 0.0123392 13.3558 0 10.5041 0C7.65239 0 7.29545 0.0123392 6.17525 0.0615356C5.05923 0.110732 4.29197 0.291333 3.62729 0.549654C2.92142 0.816309 2.28959 1.22655 1.76436 1.76402C1.23095 2.28916 0.816625 2.92503 0.553926 3.62243C0.295395 4.29115 0.114921 5.0541 0.0657146 6.16991C0.0123415 7.29406 0 7.65093 0 10.5021C0 13.3532 0.0123415 13.7101 0.0615474 14.8301C0.110753 15.9459 0.291388 16.713 0.549919 17.3777C0.816625 18.0833 1.23095 18.715 1.76436 19.2401C2.28959 19.7735 2.92558 20.1879 3.62312 20.4503C4.29197 20.7088 5.05506 20.8893 6.17125 20.9385C7.29128 20.9878 7.64838 21 10.5001 21C13.3518 21 13.7087 20.9878 14.8289 20.9385C15.9449 20.8893 16.7122 20.7088 17.3769 20.4503C18.7885 19.9047 19.9045 18.7889 20.4502 17.3777C20.7086 16.709 20.8892 15.9459 20.9385 14.8301C20.9877 13.7101 21 13.3532 21 10.5021C21 7.65093 20.9958 7.29406 20.9466 6.17408ZM19.0552 14.748C19.01 15.7736 18.8377 16.3275 18.6941 16.6967C18.3411 17.6115 17.6149 18.3376 16.6999 18.6905C16.3306 18.8341 15.7726 19.0063 14.7509 19.0514C13.643 19.1007 13.3107 19.1129 10.5083 19.1129C7.70576 19.1129 7.36934 19.1007 6.26549 19.0514C5.2397 19.0063 4.68578 18.8341 4.31649 18.6905C3.86114 18.5222 3.44665 18.2556 3.11023 17.9069C2.76146 17.5663 2.49475 17.1561 2.32646 16.7008C2.18285 16.3316 2.01055 15.7736 1.96551 14.7522C1.91614 13.6446 1.90396 13.3122 1.90396 10.5103C1.90396 7.7083 1.91614 7.37194 1.96551 6.26846C2.01055 5.24287 2.18285 4.68905 2.32646 4.31983C2.49475 3.86441 2.76146 3.45016 3.11439 3.11364C3.45483 2.76494 3.86514 2.49828 4.32066 2.33018C4.68994 2.1866 5.24804 2.01433 6.26966 1.96914C7.37751 1.91994 7.70993 1.9076 10.5123 1.9076C13.3189 1.9076 13.6512 1.91994 14.755 1.96914C15.7808 2.01433 16.3347 2.1866 16.704 2.33018C17.1594 2.49828 17.5739 2.76494 17.9103 3.11364C18.2591 3.45417 18.5258 3.86441 18.6941 4.31983C18.8377 4.68905 19.01 5.24687 19.0552 6.26846C19.1044 7.3761 19.1167 7.7083 19.1167 10.5103C19.1167 13.3122 19.1044 13.6404 19.0552 14.748Z" fill="white" />
                  <path className='group-hover:fill-secondary' d="M10.5 6C8.01567 6 6 8.01554 6 10.5C6 12.9845 8.01567 15 10.5 15C12.9845 15 15 12.9845 15 10.5C15 8.01554 12.9845 6 10.5 6ZM10.5 13.419C8.88829 13.419 7.58096 12.1118 7.58096 10.5C7.58096 8.88816 8.88829 7.58096 10.5 7.58096C12.1118 7.58096 13.419 8.88816 13.419 10.5C13.419 12.1118 12.1118 13.419 10.5 13.419Z" fill="white" />
                  <path className='group-hover:fill-secondary' d="M18 5.5C18 6.32835 17.3284 7 16.4999 7C15.6716 7 15 6.32835 15 5.5C15 4.67146 15.6716 4 16.4999 4C17.3284 4 18 4.67146 18 5.5Z" fill="white" />
                </svg>
              </a>

              {/* twitter */}
              <a href="#" target='_blank'>
                <svg className='w-7 md:w-9 group' viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className='group-hover:fill-secondary' d="M23 2.24931C22.1447 2.63077 21.2333 2.88362 20.2831 3.00638C21.2606 2.413 22.0067 1.48054 22.3574 0.356615C21.4461 0.909077 20.4398 1.29931 19.3674 1.51708C18.5021 0.580231 17.2687 0 15.9232 0C13.3127 0 11.2111 2.15431 11.2111 4.79531C11.2111 5.17531 11.2427 5.54069 11.3203 5.88854C7.40025 5.69415 3.93156 3.78392 1.60137 0.874C1.19456 1.59162 0.955938 2.413 0.955938 3.29723C0.955938 4.95754 1.79688 6.42931 3.05037 7.28138C2.29281 7.26677 1.54962 7.04315 0.92 6.69092C0.92 6.70554 0.92 6.72454 0.92 6.74354C0.92 9.07323 2.55444 11.0083 4.69775 11.4541C4.31394 11.5608 3.89562 11.6119 3.4615 11.6119C3.15963 11.6119 2.85487 11.5944 2.56881 11.5301C3.17975 13.4286 4.91338 14.8244 6.97475 14.8697C5.3705 16.1456 3.33356 16.9144 1.12844 16.9144C0.74175 16.9144 0.370875 16.8968 0 16.8486C2.08869 18.2181 4.56406 19 7.2335 19C15.9102 19 20.654 11.6923 20.654 5.358C20.654 5.14608 20.6468 4.94146 20.6367 4.73831C21.5726 4.06308 22.3589 3.21977 23 2.24931Z" fill="white" />
                </svg>
              </a>
              {/* linked in */}
              <a href="#" target='_blank'>
                <svg className='w-7 md:w-9 group' viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                  <path className='group-hover:fill-secondary ' d="M19.4855 0H1.51453C0.67804 0 0 0.67804 0 1.51453V19.4855C0 20.322 0.67804 21 1.51453 21H19.4855C20.322 21 21 20.322 21 19.4855V1.51453C21 0.67804 20.322 0 19.4855 0V0ZM7.44882 15.873H4.89159V8.17957H7.44882V15.873ZM6.17029 7.12903H6.15363C5.2955 7.12903 4.74051 6.53831 4.74051 5.80003C4.74051 5.04508 5.31248 4.4707 6.18727 4.4707C7.06206 4.4707 7.60039 5.04508 7.61705 5.80003C7.61705 6.53831 7.06206 7.12903 6.17029 7.12903ZM16.6696 15.873H14.1127V11.7572C14.1127 10.7229 13.7425 10.0174 12.8172 10.0174C12.1108 10.0174 11.6901 10.4933 11.5052 10.9526C11.4376 11.117 11.4211 11.3467 11.4211 11.5767V15.873H8.86402C8.86402 15.873 8.89751 8.90135 8.86402 8.17957H11.4211V9.26889C11.7609 8.74466 12.3689 7.99901 13.7257 7.99901C15.4081 7.99901 16.6696 9.09858 16.6696 11.4616V15.873Z" fill="white" />
                </svg>
              </a>


            </div>

          </div>

        </div>

      </section>

      <div className='w-full bg-[#252525] text-primaryWhite text-center p-4 mt-4 md:mt-10 text-xs md:text-lg'>
        Little Lemon 2024 © | All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer