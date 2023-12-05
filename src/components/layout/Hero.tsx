function Hero() {
  return (
    <div className="py-20 flex flex-col items-center">
      <h1 className="font-bold text-4xl text-center text-primary">متن ساز</h1>
      <p className="text-center pt-7 font-bold text-secondary">
        ابزاری برای برنامه نویسان و طراحان برای ساخت متن تستی (مشابه لورم ایپسوم)
        <br /> <br />
        برای حمایت و مشارکت در این پروژه میتونیدl به ریپازیتوری زیر مراجعه کنید 🙌
      </p>
      <a
        href="https://github.com/nafasebra/matnsaazz"
        className="mt-5 py-2 px-5 shodow-box bg-button flex items-center justify-center rounded-lg text-white hover:opacity-60"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
        <span className="mr-3 font-bold">گیت هاب متن ساز</span>
      </a>
    </div>
  );
}

export default Hero;
